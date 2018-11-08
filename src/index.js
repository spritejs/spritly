import './messages';
import './blocks';
import {Dropdown} from './dropdown';

const Blockly = require('blockly');
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

function initWorkspace(el, options) {
  const workspace = Blockly.inject(el, options);

  // workspace.createVariable('sprite', '');

  return workspace;
}

Dropdown.addBlockFields('Signals', 'signal_onevent_send', 'SIGNAL');
Dropdown.addBlockFields('SpriteNames', 'sprite_create_attrs', 'NAME');
Dropdown.addBlockFields('ListItems', 'list_foreach', 'ITEM');
Dropdown.addBlockFields('Sprites', 'signal_new_sprite_as_receiver', 'ID');

export {
  Blockly,
  initWorkspace,
  Dropdown,
};
