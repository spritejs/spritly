const signals = new Map();

const Signal = {
  on(signal, handler) {
    const {receivers, handlers} = signals.get(signal) || {receivers: new Set(), handlers: []};
    handlers.push(handler);
    signals.set(signal, {receivers, handlers});
  },
  listen(signal, receiver) {
    const {receivers, handlers} = signals.get(signal) || {receivers: new Set(), handlers: []};
    receivers.add(receiver);
    signals.set(signal, {receivers, handlers});
  },
  unlisten(signal, receiver) {
    const {receivers, handlers} = signals.get(signal) || {receivers: new Set(), handlers: []};
    receivers.delete(receiver);
    signals.set(signal, {receivers, handlers});
  },
  send(signal, {sender, data = {}} = {}) {
    // console.log('send signal', signal);
    const {receivers, handlers} = signals.get(signal) || {receivers: new Set(), handlers: []};
    [...receivers, {id: '$$default$signal$receiver'}].forEach((receiver) => {
      handlers.forEach((handler) => {
        handler({signal, sender, receiver, data});
      });
    });
  },
  get signals() {
    return [...signals.keys()];
  },
};

export default Signal;
