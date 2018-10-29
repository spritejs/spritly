import Signal from './signal';

const elements = new Set();
const elements_index = {};

const ElementList = {
  add(el) {
    elements.add(el);
    if(el.id) {
      elements_index[el.id] = el;
    }
    Signal.listen('ELEMENT_CREATED', el);
    Signal.send('ELEMENT_CREATED', {sender: el, receiver: el});
    const events = [
      'click',
      'dblclick',
      'mouseup',
      'mousemove',
      'mousedown',
      'mouseenter',
      'mouseleave',
    ];
    events.forEach((event) => {
      const type = `ELEMENT_${event.toUpperCase()}`;
      Signal.listen(type, el);
      el.on(event, (evt) => {
        const {altKey, button, buttons, ctrlKey, shiftKey} = evt.originalEvent;
        Signal.send(type, {sender: el,
          receiver: el,
          data: {
            target: evt.target,
            offsetX: evt.offsetX,
            offsetY: evt.offsetY,
            layerX: evt.layerX,
            layerY: evt.layerY,
            altKey,
            button,
            buttons,
            ctrlKey,
            shiftKey,
          },
        });
        evt.stopDispatch();
      });
    });

    return el;
  },
  remove(el) {
    if(el.layer) {
      el.remove();
    }
    if(el.id) {
      delete elements_index[el.id];
    }
    elements.delete(el);
    Signal.signals.forEach((signal) => {
      Signal.unlisten(signal, el);
    });
    Signal.send('ELEMENT_DESTROYED', {sender: el});
  },
  all() {
    return [...elements];
  },
  getElementById(id) {
    return elements_index[id] || null;
  },
  getElementsByName(name) {
    return [...elements].filter(el => el.name === name);
  },
};

export default ElementList;
