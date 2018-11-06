import Signal from './signal';
import Symbols from './symbols';
const store = new Map();

export default {
  set(key, value, operator = null) {
    const oldValue = store.get(key);
    store.set(key, value);
    Signal.send('STORE_PROPERTY_UPDATE', operator,
      {
        [Symbols.property]: key,
        [Symbols.oldValue]: oldValue,
        [Symbols.newValue]: value,
      });
  },
  get(key) {
    return store.get(key);
  },
  delete(key, operator = null) {
    const oldValue = store.get(key);
    store.delete(key);
    Signal.send('STORE_PROPERTY_UPDATE', operator,
      {
        [Symbols.property]: key,
        [Symbols.oldValue]: oldValue,
      });
  },
};
