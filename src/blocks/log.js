const Blockly = require('blockly');

const colour = Blockly.Msg.LOG_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.log_log = {
  init() {
    this.jsonInit({
      message0: '📋 %1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'LOG',
          options: [
            ['log', 'log'],
            ['warn', 'warn'],
            ['error', 'error'],
          ],
        }, {
          type: 'input_value',
          name: 'MSG',
        },
      ],
      // message1: '(sender, receiver, data)',
      colour,
      previousStatement,
      nextStatement,
    });
  },
};

Blockly.JavaScript.log_log = function (block) {
  const msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  const level = block.getFieldValue('LOG');
  return `console.${level}(${msg});\n`;
};

Blockly.Blocks.log_alert = {
  init() {
    this.jsonInit({
      message0: '🔔 alert %1',
      args0: [
        {
          type: 'input_value',
          name: 'MSG',
        },
      ],
      // message1: '(sender, receiver, data)',
      colour,
      previousStatement,
      nextStatement,
    });
  },
};

Blockly.JavaScript.log_alert = function (block) {
  const msg = Blockly.JavaScript.valueToCode(block, 'MSG', Blockly.JavaScript.ORDER_NONE);
  return `alert(${msg});\n`;
};
