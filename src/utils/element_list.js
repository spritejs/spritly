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
    Signal.send('ELEMENT_CREATED', {receiver: el});
  },
  remove(el) {
    if(el.id) {
      delete elements_index[el.id];
    }
    elements.delete(el);
    Signal.signals.forEach((signal) => {
      Signal.unlisten(signal, el);
    });
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
