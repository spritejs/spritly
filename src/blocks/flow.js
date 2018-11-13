const Blockly = require('blockly');

const Msg = Blockly.Msg;
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
  this.setColour(Msg.FLOWS_HUE);
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

const controls_repeat_ext_init = Blockly.Blocks.controls_repeat_ext.init;
Blockly.Blocks.controls_repeat_ext.init = function () {
  controls_repeat_ext_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.JavaScript.controls_repeat_ext = function (block) {
  // Repeat n times.
  let repeats;
  if(block.getField('TIMES')) {
    // Internal number.
    repeats = String(Number(block.getFieldValue('TIMES')));
  } else {
    // External number.
    repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  }
  let branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  let code = '';
  const loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
    'count', Blockly.Variables.NAME_TYPE
  );
  let endVar = repeats;
  let endVarDef = '';
  if(!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
    endVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'repeat_end', Blockly.Variables.NAME_TYPE
    );
    endVarDef = `, ${endVar} = ${repeats}`;
  }
  code += `for(let ${loopVar} = 0${endVarDef}; ${loopVar} < ${endVar}; ${loopVar}++){
${branch}}\n`;

  return code;
};

const controls_whileUntil_init = Blockly.Blocks.controls_whileUntil.init;
Blockly.Blocks.controls_whileUntil.init = function () {
  controls_whileUntil_init.call(this);
  this.getInput('DO').setCheck('Statement');
  this.setNextStatement(true, 'Statement');
  this.setPreviousStatement(true, 'Statement');
  this.setColour(Msg.FLOWS_HUE);
};

Blockly.Blocks.list_foreach = {
  init() {
    this.jsonInit({
      message0: Msg.LIST_FOREACH_MSG0,
      args0: [
        {
          type: 'input_value',
          name: 'LIST',
          check: ['String', 'Array'],
        },
      ],
      message1: Msg.LIST_FOREACH_MSG1,
      args1: [
        {
          type: 'input_statement',
          name: 'DO',
          check: 'Statement',
        },
      ],
      message2: Msg.LIST_FOREACH_MSG2,
      args2: [
        {
          type: 'field_input',
          name: 'ITEM',
          text: 'item',
        }, {
          type: 'field_dropdown',
          name: 'INDEX',
          options: ['i', 'j', 'k', 'l', 'm'].map(s => [s, s]),
        },
      ],
      colour: Msg.FLOWS_HUE,
      previousStatement: 'Statement',
      nextStatement: 'Statement',
      tooltip: Msg.LIST_FOREACH_TOOLTIP,
    });
  },
};

Blockly.JavaScript.list_foreach = function (block) {
  const list = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_NONE) || '[]';
  const item = block.getFieldValue('ITEM');
  const index = block.getFieldValue('INDEX');
  let code = Blockly.JavaScript.statementToCode(block, 'DO');

  let indent = /^([\s\t]+)/.exec(code);
  if(indent) indent = `\n${indent[0]}`;
  else indent = `\n${Blockly.Generator.prototype.INDENT}`;
  if(code) code = `${code}\n`;

  return `await ${list}.reduce(async function($$prestep, ${item}, ${index}) {${indent}await $$prestep;\n${code}}, null);\n`;
};

Blockly.Blocks.list_index = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'INDEX',
          options: ['i', 'j', 'k', 'l', 'm'].map(s => [s, s]),
        },
      ],
      output: 'Number',
      colour: Msg.FLOWS_HUE,
      tooltip: Msg.LIST_INDEX_TOOLTIP,
    });
  },
};

Blockly.JavaScript.list_index = function (block) {
  const index = block.getFieldValue('INDEX');
  return [index, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.list_item = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'ITEM',
          options: () => {
            const blocks = this.workspace.getBlocksByType('list_foreach');
            if(blocks.length) {
              return blocks.map((block) => {
                const name = block.getFieldValue('ITEM');
                return [name, name];
              });
            }
            return [['item', 'item']];
          },
        },
      ],
      output: null,
      colour: Msg.FLOWS_HUE,
      tooltip: Msg.LIST_ITEM_TOOLTIP,
    });
  },
};

Blockly.JavaScript.list_item = function (block) {
  const index = block.getFieldValue('ITEM');
  return [index, Blockly.JavaScript.ORDER_NONE];
};
