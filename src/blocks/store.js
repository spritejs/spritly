const Blockly = require('blockly');

const Msg = Blockly.Msg;
const colour = Msg.STORE_HUE;

Blockly.Blocks.store_set = {
  init() {
    this.jsonInit({
      message0: Msg.STORE_SET_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'KEY',
          check: 'String',
        },
        {
          type: 'input_value',
          name: 'VALUE',
        },
      ],
      inputsInline: true,
      colour,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.STORE_SET_TOOLTIP,
    });
  },
};

Blockly.JavaScript.store_set = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';

  return `spritly.runtime.Store.set(${key}, ${value}, target);\n`;
};

Blockly.Blocks.store_get = {
  init() {
    this.jsonInit({
      message0: Msg.STORE_GET_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'KEY',
          check: 'String',
        },
      ],
      colour,
      output: null,
      tooltip: Msg.STORE_GET_TOOLTIP,
    });
  },
};

Blockly.JavaScript.store_get = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  return [`spritly.runtime.Store.get(${key})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.store_delete = {
  init() {
    this.jsonInit({
      message0: Msg.STORE_DELETE_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'KEY',
          check: 'String',
        },
      ],
      colour,
      output: null,
      tooltip: Msg.STORE_DELETE_TOOLTIP,
    });
  },
};

Blockly.JavaScript.store_delete = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_MEMBER) || '\'key\'';
  return [`spritly.runtime.Store.delete(${key})`, Blockly.JavaScript.ORDER_NONE];
};
