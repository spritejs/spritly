import './messages';
import './blocks';
import './generator';
import {Dropdown} from './dropdown';
import Application from './application';
import * as utils from './utils';

const Blockly = require('blockly');
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

Dropdown.addBlockFields('Signals', 'signal_onevent_send', 'SIGNAL');
Dropdown.addBlockFields('SpriteNames', 'sprite_create_attrs', 'NAME');
Dropdown.addBlockFields('ListItems', 'list_foreach', 'ITEM');
Dropdown.addBlockFields('Sprites', 'signal_new_sprite_as_receiver', 'ID');

const _dispose = Blockly.Block.prototype.dispose;
Blockly.Block.prototype.dispose = function (...args) {
  if(this.destroyed) {
    this.destroyed();
  }
  return _dispose.apply(this, args);
};

Blockly.Workspace.prototype.getBlocksByType = function (type) {
  return this.getAllBlocks().filter(b => b.type === type);
};

Object.defineProperty(Blockly.Workspace.prototype, 'toolboxWorkspace', {
  get() {
    const flyout = this.getFlyout_();
    if(flyout) {
      return flyout.workspace_;
    }
    return null;
  },
});

Blockly.Block.prototype.getAllDescendants = function () {
  function getDescendants(block) {
    const children = block.getChildren();
    if(children) {
      return children.reduce((list, child) => {
        return [...list, ...getDescendants(child)];
      }, [block]);
    }
    return [block];
  }
  return getDescendants(this).slice(1);
};

export {
  Blockly,
  Application,
  utils,
  Dropdown,
};
