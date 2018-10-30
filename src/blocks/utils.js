import {Dropdown} from '../dropdown';

export function plugEachItemInForEachScope(field = 'SPRITE') {
  return function () {
    const el = this.getFieldValue(field);
    if(el === 'item') {
      const parent = this.getParent();
      let top = parent;
      let isInScope = false;
      while(top) {
        if(top.type === 'sprite_each_elements_named') {
          isInScope = true;
          break;
        }
        top = top.getParent();
      }
      if(parent && !isInScope) {
        console.error(`Block '${this.type}' must be placed inside the Block 'sprite_each_elements_named'.`);
        this.unplug(true);
      }
    }
  };
}

const Blockly = require('blockly');
const Msg = Blockly.Msg;

export function spriteOptions() {
  const sprites = Dropdown.get('Sprites');
  return [
    [Msg.COMMON_TARGET, 'target'],
    [Msg.COMMON_SENDER, 'sender'],
    [Msg.COMMON_RECEIVER, 'receiver'],
    [Msg.COMMON_ITEM, 'item'],
  ].concat(sprites.map(s => [s, s]));
}
