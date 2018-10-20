const Blockly = require('blockly');

const colour = Blockly.Msg.SPRITE_HUE;

Blockly.Blocks.create_sprite_onto = {

};

Blockly.Blocks.create_sprite_with = {
  init() {
    this.appendDummyInput().appendField('create ')
      .appendField(new Blockly.FieldDropdown([
        ['Sprite', 'Sprite'],
        ['Label', 'Label'],
        ['Path', 'Path'],
      ]),
      'TYPE').appendField(' with ');
    this.appendStatementInput('ATTRS')
      .setCheck(['KeyValue']);
    this.setOutput(true, 'SPRITE');
    this.setColour(colour);
  },
};

Blockly.JavaScript.create_sprite_with = function (block) {
  const fields = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  const type = block.getFieldValue('TYPE');
  return [`new ${type}($$_({${fields}\n}))`, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.Blocks.sprite_append_to = {
  init() {
    this.jsonInit({
      message0: 'append %1 to %2',
      args0: [
        {type: 'input_value', name: 'SPRITE', check: 'SPRITE'},
        {type: 'field_dropdown',
          name: 'LAYER',
          options: [
            ['fglayer', 'fglayer'],
            ['bglayer', 'bglayer'],
          ],
        },
      ],
      colour,
      previousStatement: null,
      nextStatement: null,
    });
  },
};

Blockly.JavaScript.sprite_append_to = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ADDITION) || 'null';
  const layerName = block.getFieldValue('LAYER');

  return `scene.layer('${layerName}').append(${sprite});\n`;
};

Blockly.Blocks.sprite_attrs = {
  init() {
    this.jsonInit({
      message0: 'set %1 attributes %2',
      args0: [
        {type: 'input_value', name: 'SPRITE', check: 'SPRITE'},
        {type: 'input_statement', name: 'ATTRS', check: 'KeyValue'},
      ],
      colour,
      previousStatement: null,
      nextStatement: null,
    });
  },
};

Blockly.JavaScript.sprite_attrs = function (block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ADDITION) || 'null';
  const attrs = Blockly.JavaScript.statementToCode(block, 'ATTRS');
  return `${sprite}.attr($$_({${attrs}\n}));\n`;
};
