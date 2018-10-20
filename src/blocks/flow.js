const Blockly = require('blockly');

const colour = Blockly.Msg.FLOW_HUE;

Blockly.Blocks.flow_wait = {
  init() {
    this.jsonInit({
      message0: 'wait %1 millsec 🕙',
      args0: [
        {type: 'field_input', name: 'SEC', check: 'Number', text: '16'},
      ],
      colour,
      previousStatement: null,
      nextStatement: null,
    });
  },
};

Blockly.JavaScript.flow_wait = function (block) {
  const ms = parseInt(block.getFieldValue('SEC'), 10);

  return `await $$wait(${ms});\n`;
};

Blockly.Blocks.flow_frame = {
  init() {
    this.jsonInit({
      message0: 'next frame of %1 ⌛',
      args0: [
        {type: 'field_dropdown',
          name: 'LAYER',
          options: [
            ['fglayer', 'fglayer'],
            ['bglayer', 'bglayer'],
          ],
        },
      ],
      colour,
      previousStatement: null,
      nextStatement: null,
    });
  },
};

Blockly.JavaScript.flow_frame = function (block) {
  const layerName = block.getFieldValue('LAYER');
  return `await scene.layer('${layerName}').prepareRender();\n`;
};
