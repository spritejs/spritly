const signals = new Map();

const Signal = {
  DEFAULT_RECEIVER: {id: Symbol('default_receiver')},
  on(signal, handler) {
    const handlers = signals.get(signal) || [];
    handlers.push(handler);
    signals.set(signal, handlers);
  },
  un(signal, handler) {
    const handlers = signals.get(signal);
    if(handlers) {
      const idx = handlers.indexOf(handler);
      if(idx >= 0) {
        handlers.splice(idx, 1);
      }
    }
  },
  send(signal, sender, data = {}) {
    // console.log('send signal', signal);
    const handlers = signals.get(signal) || [];
    handlers.forEach((handler) => {
      handler(sender, data);
    });
  },
  get signals() {
    return [...signals.keys()];
  },
};

export default Signal;
