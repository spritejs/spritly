const Blockly = require('blockly');
const Msg = Blockly.Msg;

const colour = Msg.SOUND_HUE;

Blockly.Blocks.sound_play = {
  init() {
    this.jsonInit({
      message0: Msg.SOUND_PLAY_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'SOUND',
          check: 'String',
        },
      ],
      colour,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.SOUND_PLAY_TOOLTIP,
    });
  },
};

Blockly.JavaScript.sound_play = function (block) {
  const src = Blockly.JavaScript.valueToCode(block, 'SOUND', Blockly.JavaScript.ORDER_NONE);
  return `spritly.runtime.Audio.play(${src});\n`;
};
