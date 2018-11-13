import './messages';
import './blocks';
import './generator';
import Application from './application';

const Blockly = require('blockly');
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

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
};
