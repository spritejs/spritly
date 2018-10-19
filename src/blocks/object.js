const Blockly = require('blockly');

Blockly.Blocks.object_create = {
  init() {
    this.appendDummyInput().appendField('new Object');
    this.appendStatementInput('FIELDS')
      .setCheck(['KeyValue']);
    this.setOutput(true);
    this.setColour(260);
    this.setTooltip(() => {
      return 'Create object';
    });
  },
};
Blockly.JavaScript.object_create = function (block) {
  const fields = Blockly.JavaScript.statementToCode(block, 'FIELDS');
  return [`{${fields}\n}`, Blockly.JavaScript.ORDER_MEMBER];
};
