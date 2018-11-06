import Symbols from './symbols';
import Signal from './signal';

export function dispatchEvent(signal, sender, event) {
  const evt = event.originalEvent || event;
  const {altKey, buttons, ctrlKey, shiftKey, key, keyCode} = evt;
  const data = {
    [Symbols.target]: evt.target,
    [Symbols.altKey]: altKey,
    [Symbols.ctrlKey]: ctrlKey,
    [Symbols.shiftKey]: shiftKey,
  };
  if(key != null) {
    Object.assign(data, {
      [Symbols.key]: key,
      [Symbols.keyCode]: keyCode,
    });
  }
  if(buttons != null) {
    Object.assign(data, {
      [Symbols.buttons]: buttons,
    });
  }
  if(event.originalEvent && evt.offsetX != null) {
    Object.assign(data, {
      [Symbols.offsetX]: evt.offsetX,
      [Symbols.offsetY]: evt.offsetY,
      [Symbols.layerX]: evt.layerX,
      [Symbols.layerY]: evt.layerY,
    });
  }
  Signal.send(signal, sender, data);
}