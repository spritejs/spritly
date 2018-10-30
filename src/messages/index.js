import './colors';
import './blocks';

const Blockly = require('blockly');

const {Msg} = Blockly;

Msg.$ = (key, prefix = 'COMMON') => {
  const k = `${prefix}_${key.toUpperCase()}`;
  if(k in Msg) return Msg[k];
  return key;
};
