const Blockly = require('blockly');

const Msg = Blockly.Msg;

Blockly.Blocks.nil = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'VALUE',
          options: [
            [Msg.LITERAL_NULL, 'null'],
            [Msg.LITERAL_UNDEFINED, 'undefined'],
          ],
        },
      ],
      colour: Msg.LITERAL_HUE,
    });
    this.setOutput(true);
    this.setTooltip(() => Msg.NIL_TOOLTIP.replace('%1', this.getFieldValue('VALUE')));
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
    this.jsonInit({
      message0: '%1 %2',
      args0: [
        {type: 'field_input', name: 'TEXT', text: ''},
        {type: 'input_value', name: 'NEXT'},
      ],
      output: 'String',
      colour: Blockly.Msg.LITERAL_HUE,
      helpUrl: Blockly.Msg.TEXT_TEXT_HELPURL,
      tooltip: Blockly.Msg.TEXT_TEXT_TOOLTIP,
      extensions: [
        'text_quotes',
        'parent_tooltip_when_inline',
      ],
    });
  },
};

Blockly.JavaScript.string = function (block) {
  const code = Blockly.JavaScript.text(block);
  const next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
  if(next) {
    return [`${code[0]} + ${next}`, code[1]];
  }
  return code;
};

Blockly.Blocks.object_create = {
  init() {
    this.appendDummyInput().appendField('new Object');
    this.appendStatementInput('FIELDS')
      .setCheck(['KeyValue']);
    this.setOutput(true);
    this.setColour(Msg.LITERAL_HUE);
    this.setTooltip(Msg.OBJECT_CREATE_TOOLTIP);
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
      message0: Msg.LOOP_GET_INDEX_MSG0,
      colour: Msg.LITERAL_HUE,
      output: 'Number',
      tooltip: Msg.LOOP_GET_INDEX_TOOLTIP,
    });
  },
};

Blockly.JavaScript.loop_get_index = function (block) {
  return ['index', Blockly.JavaScript.ORDER_NONE];
};
