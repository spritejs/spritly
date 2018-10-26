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

export default function parse_attr(...args) {
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
  return attrs;
}
