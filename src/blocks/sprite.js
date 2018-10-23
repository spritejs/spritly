const Blockly = require('blockly');

const colour = Blockly.Msg.SPRITE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

const sender_receiver_dropdown = {
  type: 'field_dropdown',
  name: 'SPRITE',
  options: [
    ['receiver', 'receiver'],
    ['sender', 'sender'],
  ],
};

Blockly.Blocks.sprite_append_to = {
  init() {
    this.jsonInit({
      message0: 'append %1 to %2',
      args0: [
        sender_receiver_dropdown,
        {type: 'field_dropdown',
          name: 'LAYER',
          options: [
            ['fglayer', 'fglayer'],
            ['bglayer', 'bglayer'],
          ],
        },
      ],
      colour,
      previousStatement,
      nextStatement,
    });
  },
};

Blockly.JavaScript.sprite_append_to = function (block) {
  const sprite = block.getFieldValue('SPRITE');
  const layerName = block.getFieldValue('LAYER');

  return `scene.layer('${layerName}').append(${sprite});\n`;
};

Blockly.Blocks.sprite_attrs = {
  init() {
    this.jsonInit({
      message0: 'set %1 attrs',
      args0: [
        sender_receiver_dropdown,
      ],
      message1: '%1',
      args1: [
        {type: 'input_statement', name: 'ATTRS', check: 'KeyValue'},
      ],
      colour,
      previousStatement,
      nextStatement,
    });
  },
};

Blockly.JavaScript.sprite_attrs = function (block) {
  const sprite = block.getFieldValue('SPRITE');
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return `${sprite}.attr($$_({${attrs}\n}));\n`;
};
