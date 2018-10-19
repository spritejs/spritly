const Blockly = require('blockly');

Blockly.Blocks.field_attr_inc = {
  init() {
    this.jsonInit({
      message0: '%1 %2',
      args0: [
        {type: 'field_dropdown',
          name: 'OP',
          options: [
            ['+', '+'],
            ['-', '-'],
            ['*', '*'],
            ['/', '/'],
            ['^', '**'],
          ]},
        {type: 'input_value', name: 'VALUE', check: 'Number'},
      ],
      colour: 55,
    });
    this.setOutput(true, 'Number');
  },
};

Blockly.JavaScript.field_attr_inc = function (block) {
  const op = block.getFieldValue('OP');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ADDITION) || 0;
  return [`v => v ${op} ${value}`, Blockly.JavaScript.ORDER_MEMBER];
};

function createKVConf(keys = 'key', valueType = '') {
  const arg0 = {name: 'KEY', type: 'field_input'};
  if(Array.isArray(keys)) {
    arg0.type = 'field_dropdown';
    arg0.options = keys.map(key => [key, key]);
  } else {
    arg0.text = keys;
  }
  return {
    message0: '%1: %2,',
    args0: [
      arg0,
      {type: 'input_value', name: 'VALUE', check: valueType},
    ],
    colour: 55,
    previousStatement: 'KeyValue',
    nextStatement: 'KeyValue',
  };
}

Blockly.Blocks.field_attr = {
  init() {
    this.jsonInit(createKVConf());
    this.setTooltip(() => {
      return 'Pair key values';
    });
  },
};

function gencode(block) {
  const key = block.getFieldValue('KEY');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ADDITION) || 'null';
  return `\n'${key}': ${value},`;
}

Blockly.Blocks.field_attr_xy = {
  init() {
    this.jsonInit(createKVConf(['x', 'y'], 'Number'));
  },
};

Blockly.Blocks.field_attr_size = {
  init() {
    this.jsonInit(createKVConf(['width', 'height'], 'Number'));
  },
};

Blockly.Blocks.field_attr_bgcolor = {
  init() {
    this.jsonInit(createKVConf('bgcolor', 'Colour'));
  },
};

Blockly.JavaScript.field_attr = gencode;
Blockly.JavaScript.field_attr_xy = gencode;
Blockly.JavaScript.field_attr_size = gencode;
Blockly.JavaScript.field_attr_bgcolor = gencode;
