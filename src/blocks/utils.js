import {Dropdown} from '../dropdown';

const Blockly = require('blockly');
const Msg = Blockly.Msg;

export function spriteOptions() {
  const sprites = Dropdown.get('Sprites');
  return [
    [Msg.COMMON_TARGET, 'target'],
    [Msg.COMMON_SENDER, 'sender'],
    [Msg.COMMON_RECEIVER, 'receiver'],
  ].concat(sprites.map(s => [s, s]));
}
