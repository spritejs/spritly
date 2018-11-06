import Signal from './signal';

const elements = new Set();
const elements_index = {};

const ElementList = {
  add(el) {
    elements.add(el);
    if(el.id) {
      elements_index[el.id] = el;
    }
    Signal.send('ELEMENT_CREATED', el);
    return el;
  },
  remove(el) {
    if(el.layer) {
      el.remove();
    }
    Signal.send('ELEMENT_DESTROYED', el);
    if(el.id) {
      delete elements_index[el.id];
    }
    el.$$deleted = true;
    elements.delete(el);
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
