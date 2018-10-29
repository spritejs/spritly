const Blockly = require('blockly');

const colour = Blockly.Msg.EASING_HUE;

Blockly.Blocks.easing = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'EASING',
          options: [
            ['ease', 'ease'],
            ['ease-in', 'ease-in'],
            ['ease-out', 'ease-out'],
            ['ease-in-out', 'ease-in-out'],
          ],
        },
      ],
      colour,
      output: 'String',
    });
  },
};

Blockly.JavaScript.easing = function (block) {
  const easing = block.getFieldValue('EASING');
  return [`'${easing}'`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.bezier_easing = {
  init() {
    this.jsonInit({
      message0: 'cubic-bezier %1 %2 %3 %4',
      args0: [
        {
          type: 'field_input',
          name: 'X0',
          text: '0.68',
          check: 'Number',
        },
        {
          type: 'field_input',
          name: 'Y0',
          text: '-0.55',
          check: 'Number',
        },
        {
          type: 'field_input',
          name: 'X1',
          text: '0.265',
          check: 'Number',
        },
        {
          type: 'field_input',
          name: 'Y1',
          text: '1.55',
          check: 'Number',
        },
      ],
      colour,
      output: 'String',
    });
  },
};

Blockly.JavaScript.bezier_easing = function (block) {
  const x0 = block.getFieldValue('X0');
  const y0 = block.getFieldValue('Y0');
  const x1 = block.getFieldValue('X1');
  const y1 = block.getFieldValue('Y1');
  return [`'cubic-bezier(${x0},${y0},${x1},${y1})'`, Blockly.JavaScript.ORDER_NONE];
};
