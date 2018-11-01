const Blockly = require('blockly');

const Msg = Blockly.Msg;
const colour = Msg.LISTS_HUE;

Blockly.Blocks.lists_create_range = {
  init() {
    this.jsonInit({
      message0: Msg.LISTS_CREATE_RANGE_MSG0,
      message1: Msg.LISTS_CREATE_RANGE_MSG1,
      args1: [
        {
          type: 'input_value',
          name: 'FROM',
          check: 'Number',
        },
        {
          type: 'input_value',
          name: 'TO',
          check: 'Number',
        },
      ],
      inputsInline: true,
      output: 'Array',
      colour,
      tooltip: Msg.LISTS_CREATE_RANGE_TOOLTIP,
    });
  },
};

Blockly.JavaScript.lists_create_range = function (block) {
  const from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  const to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

  return [`(Array.from({length: Math.abs(${from} - ${to}) + 1}).map((_, i) => ${from} + (${from} - ${to} > 0 ? -1 : 1) * i))`, Blockly.JavaScript.ORDER_NONE];
};
