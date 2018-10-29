const Blockly = require('blockly');

Blockly.Blocks.key_value = {
  init() {
    this.jsonInit({
      message0: '%1: %2,',
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
      colour: Blockly.Msg.LITERAL_HUE,
      previousStatement: 'KeyValue',
      nextStatement: 'KeyValue',
    });
  },
};

Blockly.JavaScript.key_value = function (block) {
  const key = block.getFieldValue('KEY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || 'null';
  return `\n'${key}': ${value},`;
};

Blockly.Blocks.nil = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'VALUE',
          options: [
            ['null', 'null'],
            ['undefined', 'undefined'],
          ],
        },
      ],
      colour: Blockly.Msg.LITERAL_HUE,
    });
    this.setOutput(true);
  },
};

Blockly.JavaScript.nil = function (block) {
  const value = block.getFieldValue('VALUE');
  return [value, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.boolean = {
  init() {
    Blockly.Blocks.logic_boolean.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  },
};
Blockly.JavaScript.boolean = Blockly.JavaScript.logic_boolean;

Blockly.Blocks.number = {
  init() {
    Blockly.Blocks.math_number.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  },
};
Blockly.JavaScript.number = Blockly.JavaScript.math_number;

Blockly.Blocks.string = {
  init() {
    Blockly.Blocks.text.init.call(this);
    this.setColour(Blockly.Msg.LITERAL_HUE);
  },
};
Blockly.JavaScript.string = Blockly.JavaScript.text;

const lists_create_with_init = Blockly.Blocks.lists_create_with.init;
Blockly.Blocks.lists_create_with.init = function () {
  lists_create_with_init.call(this);
  this.setColour(Blockly.Msg.LITERAL_HUE);
};

Blockly.Blocks.object_create = {
  init() {
    this.appendDummyInput().appendField('new Object');
    this.appendStatementInput('FIELDS')
      .setCheck(['KeyValue']);
    this.setOutput(true);
    this.setColour(Blockly.Msg.LITERAL_HUE);
    this.setTooltip(() => {
      return 'Create object';
    });
  },
};
Blockly.JavaScript.object_create = function (block) {
  const fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  return [`{${fields}\n}`, Blockly.JavaScript.ORDER_MEMBER];
};

const colour_picker_init = Blockly.Blocks.colour_picker.init;

Blockly.Blocks.colour_picker.init = function () {
  colour_picker_init.call(this);
  this.setColour(Blockly.Msg.LITERAL_HUE);
};

Blockly.Blocks.loop_get_index = {
  init() {
    this.jsonInit({
      message0: 'index',
      colour: Blockly.Msg.LITERAL_HUE,
      output: 'Number',
    });
  },
};

Blockly.JavaScript.loop_get_index = function (block) {
  return ['index', Blockly.JavaScript.ORDER_NONE];
};
