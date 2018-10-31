const Blockly = require('blockly');

const Msg = Blockly.Msg;

Blockly.Blocks.key_value = {
  init() {
    this.jsonInit({
      message0: Msg.KEYVALUE_MSG0,
      args0: [
        {
          type: 'field_input',
          name: 'KEY',
          text: 'key',
        },
        {
          type: 'input_value',
          name: 'VALUE',
        },
      ],
      colour: Msg.GETTER_SETTER_HUE,
      previousStatement: 'KeyValue',
      nextStatement: 'KeyValue',
    });
    this.setTooltip(Msg.KEYVALUE_TOOLTIP);
  },
};

Blockly.JavaScript.key_value = function (block) {
  const key = block.getFieldValue('KEY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return `\n'${key}': ${value},`;
};

Blockly.Blocks.object_get_prop = {
  init() {
    this.jsonInit({
      message0: Msg.OBJECT_GET_PROP_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'OBJECT',
        },
        {
          type: 'field_input',
          name: 'PROP',
          text: 'key',
        },
      ],
      inputsInline: true,
      output: null,
      colour: Msg.GETTER_SETTER_HUE,
    });
    this.setTooltip(Msg.OBJECT_GET_PROP_TOOLTIP);
  },
};

Blockly.JavaScript.object_get_prop = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || 'null';
  const propName = block.getFieldValue('PROP');

  return [`${object}['${propName}']`, Blockly.JavaScript.ORDER_NONE];
};
