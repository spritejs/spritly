const Blockly = require('blockly');

const controls_if_init = Blockly.Blocks.controls_if.init;

Blockly.Blocks.controls_if.init = function () {
  controls_if_init.call(this);
  for(let i = 0; i < 20; i++) {
    const input = this.getInput(`DO${i}`);
    if(input) {
      input.setCheck('Statement');
    } else {
      break;
    }
  }
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
};

Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN.saveConnections = function (containerBlock) {
  let clauseBlock = containerBlock.nextConnection.targetBlock();
  let i = 1;
  let inputIf,
    inputDo;
  while(clauseBlock) {
    switch (clauseBlock.type) {
      case 'controls_if_elseif':
        inputIf = this.getInput(`IF${i}`);
        inputDo = this.getInput(`DO${i}`);
        inputDo.setCheck('Statement');
        clauseBlock.valueConnection_
            = inputIf && inputIf.connection.targetConnection;
        clauseBlock.statementConnection_
            = inputDo && inputDo.connection.targetConnection;
        i++;
        break;
      case 'controls_if_else':
        inputDo = this.getInput('ELSE');
        inputDo.setCheck('Statement');
        clauseBlock.statementConnection_
            = inputDo && inputDo.connection.targetConnection;
        break;
      default:
        throw TypeError(`Unknown block type: ${clauseBlock.type}`);
    }
    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
  }
};