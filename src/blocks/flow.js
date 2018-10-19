const Blockly = require('blockly');

Blockly.Blocks.flow_sync = {
  init() {
    this.jsonInit({
      message0: 'do %1',
      args0: [
        {type: 'input_statement', name: 'STATMENTS'},
      ],
      colour: 195,
      // previousStatement: null,
      // nextStatement: null,
    });
  },
};

Blockly.JavaScript.flow_sync = function (block) {
  const code = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  return `(function(){\n${code}}());`;
};

Blockly.Blocks.flow_async = {
  init() {
    this.jsonInit({
      message0: 'async %1',
      args0: [
        {type: 'input_statement', name: 'STATEMENTS'},
      ],
      colour: 195,
      // previousStatement: null,
      // nextStatement: null,
    });
  },
};

Blockly.JavaScript.flow_async = function (block) {
  const code = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  return `(async function(){\n${code}}());`;
};

Blockly.Blocks.flow_wait = {
  init() {
    this.jsonInit({
      message0: 'wait %1 millsec 🕙',
      args0: [
        {type: 'field_input', name: 'SEC', check: 'Number', text: '16'},
      ],
      colour: 195,
      previousStatement: null,
      nextStatement: null,
    });
  },
};

Blockly.JavaScript.flow_wait = function (block) {
  const ms = parseInt(block.getFieldValue('SEC'), 10);

  return `await $$wait(${ms});\n`;
};
