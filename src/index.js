import './messages';
import './blocks';
import './generator';
import {Dropdown} from './dropdown';

const Blockly = require('blockly');
Blockly.BlockSvg.START_HAT = true;

Blockly.Field.prototype.maxDisplayLength = 20;

function initWorkspace(el, options) {
  const workspace = Blockly.inject(el, options);

  // workspace.createVariable('sprite', '');

  return workspace;
}

function pack(xml) {
  const nexts = xml.querySelectorAll('next > block');
  const allBlocks = [];

  function getBlocksSet(block) {
    for(let i = 0; i < allBlocks.length; i++) {
      const blockSet = allBlocks[i];
      if(blockSet.has(block)) return blockSet;
    }
    const blockSet = new Set();
    blockSet.add(block);
    allBlocks.push(blockSet);
    return blockSet;
  }

  nexts.forEach((nextBlock) => {
    const parentBlock = nextBlock.parentNode.parentNode;
    nextBlock.parentNode.remove();
    nextBlock.remove();
    const blockSet = getBlocksSet(parentBlock);
    blockSet.add(nextBlock);
  });

  allBlocks.forEach((blockSet) => {
    const blocks = [...blockSet];
    const parent = blocks[0].parentNode;
    const blocksNode = document.createElement('blocks');
    parent.insertBefore(blocksNode, blocks[0]);
    blocks[0].remove();
    blocks.forEach(block => blocksNode.appendChild(block));
  });
}

function unpack(xml) {
  const allBlocks = xml.querySelectorAll('blocks');
  allBlocks.forEach((blocks) => {
    const root = blocks.children[0];
    if(root) {
      let parent = root;
      const children = [...blocks.children];
      for(let i = 1; i < children.length; i++) {
        const block = children[i];
        block.remove();
        const next = document.createElement('next');
        next.appendChild(block);
        parent.appendChild(next);
        parent = block;
      }
      root.remove();
      blocks.parentNode.insertBefore(root, blocks);
      blocks.remove();
    }
  });
}

Dropdown.addBlockFields('Signals', 'signal_onevent_send', 'SIGNAL');
Dropdown.addBlockFields('SpriteNames', 'sprite_create_attrs', 'NAME');
Dropdown.addBlockFields('ListItems', 'list_foreach', 'ITEM');
Dropdown.addBlockFields('Sprites', 'signal_new_sprite_as_receiver', 'ID');

export {
  Blockly,
  initWorkspace,
  pack,
  unpack,
  Dropdown,
};
