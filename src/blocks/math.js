const Blockly = require('blockly');

const Msg = Blockly.Msg;
const colour = Blockly.Msg.MATH_HUE;

Blockly.Blocks.random_number = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_NUMBER_MSG0,
      colour,
      output: 'Number',
      tooltip: Msg.RANDOM_NUMBER_TOOLTIP,
    });
  },
};

Blockly.JavaScript.random_number = function (block) {
  return ['Math.random()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_integer_from_to = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_INTEGER_FROM_TO_MSG0,
      args0: [
        {
          type: 'field_number',
          name: 'FROM',
          value: 0,
        },
        {
          type: 'field_number',
          name: 'TO',
          value: 10,
        },
      ],
      colour,
      output: 'Number',
      tooltip: () => Msg.RANDOM_INTEGER_FROM_TO_TOOLTIP.replace('%1', this.getFieldValue('FROM')).replace('%2', this.getFieldValue('TO')),
    });
  },
  onchange(evt) {
    const from = this.getFieldValue('FROM'),
      to = this.getFieldValue('TO');

    this.setFieldValue(Math.round(from), 'FROM');
    this.setFieldValue(Math.round(to), 'TO');
  },
};

Blockly.JavaScript.random_integer_from_to = function (block) {
  const from = block.getFieldValue('FROM'),
    to = block.getFieldValue('TO');

  return [`utils.random(${from}, ${to})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_string = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_STRING_MSG0,
      colour,
      output: 'String',
      tooltip: Msg.RANDOM_STRING_TOOLTIP,
    });
  },
};

Blockly.JavaScript.random_string = function (block) {
  return ['\'Math.random().toString(36).slice(2)\'', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_rgb = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_COLOUR_RGB_MSG0,
      colour,
      output: 'Colour',
      tooltip: Msg.RANDOM_COLOUR_RGB_TOOLTIP,
    });
  },
};

Blockly.JavaScript.random_colour_rgb = function (block) {
  return ['utils.random_color()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_hue = {
  init() {
    this.jsonInit({
      message0: Msg.RANDOM_COLOUR_HUE_MSG0,
      message1: Msg.RANDOM_COLOUR_HUE_MSG1,
      args1: [
        {
          type: 'field_number',
          name: 'S',
          value: 100,
        },
        {
          type: 'field_number',
          name: 'L',
          value: 50,
        },
        {
          type: 'field_number',
          name: 'A',
          value: 1.0,
        },
      ],
      colour,
      output: 'Colour',
      tooltip: Msg.RANDOM_COLOUR_HUE_TOOLTIP,
    });
  },
};

Blockly.JavaScript.random_colour_hue = function (block) {
  const h = Math.floor(Math.random() * 360);
  const s = block.getFieldValue('S');
  const l = block.getFieldValue('L');
  const a = block.getFieldValue('A');

  return [`utils.random_color_hue(${s},${l},${a})`, Blockly.JavaScript.ORDER_NONE];
};
