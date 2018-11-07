import {getCollisions} from './misc';

function projectionXY(attrs, attrName, defaultValue = 0) {
  const attrX = `${attrName}X`;
  const attrY = `${attrName}Y`;
  if(attrX in attrs || attrY in attrs) {
    attrs[attrName] = [
      attrs[attrX] != null ? attrs[attrX] : defaultValue,
      attrs[attrY] != null ? attrs[attrY] : defaultValue,
    ];
    delete attrs[attrX];
    delete attrs[attrY];
  }
}

function projectionBorder(attrs) {
  if('borderWidth' in attrs || 'borderStyle' in attrs || 'borderColor' in attrs) {
    const {borderWidth, borderStyle, borderColor} = attrs;
    attrs.border = {
      width: borderWidth != null ? borderWidth : 1,
      style: borderStyle != null ? borderStyle : 'solid',
      color: borderColor != null ? borderColor : '#000000',
    };
    delete attrs.borderWidth;
    delete attrs.borderStyle;
    delete attrs.borderColor;
  }
}

const _frameTimer = Symbol('frameTimer');
const _cursor = Symbol('cursor');
const _dragHandlers = Symbol('dragHandlers');
const _originalZIndex = Symbol('originalZIndex');

export default function parse_attr(sprite, ...args) {
  const attrs = args.reduce((a, b) => Object.assign(a, b), {});
  if('texture' in attrs) {
    attrs.textures = [attrs.texture];
    delete attrs.texture;
  }
  if('fontFamily' in attrs) {
    attrs.fontFamily = `"${attrs.fontFamily}"`;
  }
  projectionXY(attrs, 'anchor', 0);
  projectionXY(attrs, 'scale', 1);
  projectionXY(attrs, 'translate', 0);
  projectionXY(attrs, 'skew', 0);
  projectionBorder(attrs);

  if('draggable' in attrs) {
    const dragHandlers = sprite[_dragHandlers];
    if(attrs.draggable === 'no' && dragHandlers) {
      const [dragstart, dragmove, dragend] = dragHandlers;
      sprite.off(['mousedown', 'touchstart'], dragstart);
      sprite.off(['mouseup', 'touchend'], dragend);
      sprite.off(['mousemove', 'touchmove'], dragmove);
      delete sprite[_dragHandlers];
    } else if(attrs.draggable === 'yes' && !dragHandlers) {
      let offsetX = 0,
        offsetY = 0;
      const dragmove = (evt) => {
        const {layerX, layerY} = evt;
        sprite.attr({
          x: layerX - offsetX,
          y: layerY - offsetY,
        });
      };
      const dragstart = (evt) => {
        offsetX = evt.offsetX;
        offsetY = evt.offsetY;
        sprite[_originalZIndex] = sprite.attr('zIndex');
        sprite.setMouseCapture();
        sprite.attr({
          shadow: {
            color: '#333',
            blur: 5,
            offset: [10, 10],
          },
          zIndex: Infinity,
        });
        sprite.on(['mousemove', 'touchmove'], dragmove);
      };
      const dragend = (evt) => {
        sprite.releaseMouseCapture();
        sprite.attr({
          shadow: null,
          zIndex: sprite[_originalZIndex],
        });
        sprite.off(['mousemove', 'touchmove'], dragmove);
        sprite.dispatchEvent('dragged', evt, true, true);
        getCollisions(sprite).forEach((s) => {
          s.dispatchEvent('draggedonto', evt, true, true);
        });
      };
      sprite[_dragHandlers] = [dragstart, dragend, dragmove];
      sprite.on(['mousedown', 'touchstart'], dragstart);
      sprite.on(['mouseup', 'touchend'], dragend);
    }
    if(!('cursor' in attrs)) {
      attrs.cursor = attrs.draggable === 'yes' ? 'move' : 'default';
    }
  }

  if('cursor' in attrs && sprite[_cursor] == null) {
    sprite[_cursor] = 'auto';
    sprite.on('mouseenter', (evt) => {
      sprite[_cursor] = evt.originalEvent.target.style.cursor;
      const cursor = sprite.attr('cursor');
      evt.originalEvent.target.style.cursor = cursor;
    });
    sprite.on('mouseleave', (evt) => {
      evt.originalEvent.target.style.cursor = sprite[_cursor];
    });
  }

  const textureFrames = Object.entries(attrs)
    .filter(([key, value]) => {
      if(key.indexOf('textureFrame$') === 0) {
        delete attrs[key];
        return true;
      }
      return false;
    })
    .map(s => s[1]);

  const len = textureFrames.length;

  if(len > 0 && !sprite.$$deleted) {
    let idx = 0;
    const frameTimer = sprite[_frameTimer];
    if(frameTimer) {
      clearTimeout(frameTimer);
    }
    sprite.attr({textures: textureFrames[idx][0]});
    sprite[_frameTimer] = setTimeout(function f() {
      sprite.attr({textures: textureFrames[idx][0]});
      if(!sprite.$$deleted) sprite[_frameTimer] = setTimeout(f, textureFrames[idx][1] * 1000);
      idx = (idx + 1) % len;
    }, textureFrames[idx][1] * 1000);
    idx = (idx + 1) % len;
  }

  return attrs;
}
