const Blockly = require('blockly');

const Msg = Blockly.Msg;
const colour = Blockly.Msg.MATH_HUE;

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
  return ['spritly.runtime.random_color()', Blockly.JavaScript.ORDER_NONE];
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

  return [`spritly.runtime.random_color_hue(${s},${l},${a})`, Blockly.JavaScript.ORDER_NONE];
};
