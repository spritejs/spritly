import Signal from './signal';

const elements = new Set();
const elements_index = {};
const _tapHandlers = Symbol('_tapHandlers');

const LONG_TAP_TIMEOUT = 1000;

const ElementList = {
  add(el) {
    if(elements.has(el)) return el;
    elements.add(el);
    if(el.id) {
      elements_index[el.id] = el;
    }
    let tapStartTime = null;
    const tapDown = (evt) => {
      tapStartTime = Date.now();
    };
    const tapUp = (evt) => {
      const tapDuration = Date.now() - tapStartTime;
      if(tapDuration >= LONG_TAP_TIMEOUT) {
        el.dispatchEvent('longtap', evt, true, true);
      } else {
        el.dispatchEvent('tap', evt, true, true);
      }
    };
    el.on('touchstart', tapDown);
    el.on('touchend', tapUp);
    el[_tapHandlers] = [tapDown, tapUp];
    Signal.send('ELEMENT_CREATED', el);
    return el;
  },
  remove(el) {
    if(el.layer) {
      el.remove();
    }
    if(el[_tapHandlers]) {
      const [tapDown, tapUp] = el[_tapHandlers];
      el.off('touchstart', tapDown);
      el.off('touchend', tapUp);
      delete el[_tapHandlers];
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
