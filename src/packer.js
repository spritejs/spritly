export function pack(xml) {
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

export function unpack(xml) {
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
