import './messages';
import './blocks';
import './generator';
import {Dropdown} from './dropdown';
import {pack, unpack} from './packer';
import Application from './application';

const Blockly = require('blockly');
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

Dropdown.addBlockFields('Signals', 'signal_onevent_send', 'SIGNAL');
Dropdown.addBlockFields('SpriteNames', 'sprite_create_attrs', 'NAME');
Dropdown.addBlockFields('ListItems', 'list_foreach', 'ITEM');
Dropdown.addBlockFields('Sprites', 'signal_new_sprite_as_receiver', 'ID');

const _dispose = Blockly.Block.prototype.dispose;
Blockly.Block.prototype.dispose = function (...args) {
  if(this.ondelete) {
    this.ondelete();
  }
  return _dispose.apply(this, args);
};

Blockly.Workspace.prototype.getBlocksByType = function (type) {
  return this.getAllBlocks().filter(b => b.type === type);
};

export {
  Blockly,
  Application,
  pack,
  unpack,
  Dropdown,
};
