const Blockly = require('blockly');

const colour = Blockly.Msg.MATH_HUE;

Blockly.Blocks.random_number = {
  init() {
    this.jsonInit({
      message0: '🎲 random number',
      colour,
      output: 'Number',
      tooltip: 'Get a random number ≥ 0 and < 1.',
    });
  },
};

Blockly.JavaScript.random_number = function (block) {
  return ['Math.random()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_integer_from_to = {
  init() {
    this.jsonInit({
      message0: '🎲 random int ≥ %1 < %2',
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
    });

    this.setTooltip(() => {
      const from = this.getFieldValue('FROM'),
        to = this.getFieldValue('TO');
      return `Get a random integer ≥ ${from} and < ${to}.`;
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
      message0: '🎲 random string',
      colour,
      output: 'String',
      tooltip: 'Get a 11 bytes length random string.',
    });
  },
};

Blockly.JavaScript.random_string = function (block) {
  return ['\'Math.random().toString(36).slice(2)\'', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_rgb = {
  init() {
    this.jsonInit({
      message0: '🎲 COLOUR',
      colour,
      output: 'Colour',
      tooltip: 'Get a random hsla color.',
    });
  },
};

Blockly.JavaScript.random_colour_rgb = function (block) {
  return ['utils.random_color()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.random_colour_hue = {
  init() {
    this.jsonInit({
      message0: '🎲 random COLOUR_HUE',
      message1: 'S %1% L %2% A %3.',
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
      tooltip: 'Get a random hsla color.',
    });
  },
};

Blockly.JavaScript.random_colour_hue = function (block) {
  const h = Math.floor(Math.random() * 360);
  const s = block.getFieldValue('S');
  const l = block.getFieldValue('L');
  const a = block.getFieldValue('A');

  return [`'hsla(${h},${s}%,${l}%,${a})'`, Blockly.JavaScript.ORDER_NONE];
};
