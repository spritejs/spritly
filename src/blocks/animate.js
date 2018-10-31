const Blockly = require('blockly');
const Msg = Blockly.Msg;

const colour = Msg.ANIMATE_HUE;
const previousStatement = 'Statement';
const nextStatement = 'Statement';

Blockly.Blocks.await = {
  init() {
    this.jsonInit({
      message0: Msg.AWAIT_MSG0,
      args0: [
        {type: 'field_number', name: 'MILLISEC', value: 16},
      ],
      colour,
      previousStatement: 'Statement',
      nextStatement: null,
      tooltip: () => Msg.AWAIT_TOOLTIP.replace('%1', this.getFieldValue('MILLISEC')),
    });
  },
};

Blockly.JavaScript.await = function (block) {
  const ms = parseInt(block.getFieldValue('MILLISEC'), 10);

  return `await utils.wait(${ms});\n`;
};

Blockly.Blocks.await_frame = {
  init() {
    this.jsonInit({
      message0: Msg.AWAIT_FRAME_MSG0,
      args0: [
        {type: 'field_dropdown',
          name: 'LAYER',
          options: [
            [Msg.COMMON_FGLAYER, 'fglayer'],
            [Msg.COMMON_BGLAYER, 'bglayer'],
          ],
        },
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.AWAIT_FRAME_TOOLTIP,
    });
  },
};

Blockly.JavaScript.await_frame = function (block) {
  const layerName = block.getFieldValue('LAYER');
  return `await scene.layer('${layerName}').prepareRender();\n`;
};

Blockly.Blocks.sprite_animate = {
  init() {
    this.jsonInit({
      message0: Msg.SPRITE_ANIMATE_MSG0,
      args0: [
        {
          type: 'field_dropdown',
          name: 'ASYNC?',
          options: [
            [Msg.SPRITE_ANIMATE_OPTION_ASYNC_DEFAULT, '-'],
            [Msg.SPRITE_ANIMATE_OPTION_ASYNC_AWAIT, 'await'],
          ],
        }, {
          type: 'input_value',
          name: 'SPRITE',
          check: 'Sprite',
        }, {
          type: 'input_value',
          name: 'DURATION',
          check: 'Number',
        },
      ],
      message1: Msg.SPRITE_ANIMATE_MSG1,
      args1: [
        {
          type: 'input_statement',
          name: 'FROM_ATTRS',
          check: 'KeyValue',
        },
      ],
      message2: Msg.SPRITE_ANIMATE_MSG2,
      args2: [
        {
          type: 'input_statement',
          name: 'TO_ATTRS',
          check: 'KeyValue',
        },
      ],
      message3: Msg.SPRITE_ANIMATE_MSG3,
      args3: [
        {
          type: 'input_value',
          name: 'EASING',
          check: 'String',
        },
      ],
      colour,
      previousStatement,
      nextStatement,
      tooltip: Msg.SPRITE_ANIMATE_TOOLTIP,
    });
  },
};

Blockly.JavaScript.sprite_animate = function (block) {
  const isAsync = block.getFieldValue('ASYNC?') === 'await';
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_NONE) || 'null';
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_NONE) || 600;
  const easing = Blockly.JavaScript.valueToCode(block, 'EASING', Blockly.JavaScript.ORDER_NONE) || '"ease"';
  const from = Blockly.JavaScript.statementToCode(block, 'FROM_ATTRS');
  const to = Blockly.JavaScript.statementToCode(block, 'TO_ATTRS');

  let code = `${sprite}.animate([{${from}
},{${to}
}], {duration: ${duration * 1000}, fill: 'forwards', easing: ${easing}})`;
  if(isAsync) {
    code = `if(!${sprite}.layer) console.error('${sprite} must append to layer before animated!'); 
await ${code}.finished`;
  }

  return `${code};\n`;
};

Blockly.Blocks.easing = {
  init() {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'EASING',
          options: [
            [Msg.EASING_OPTION_EASING_EASE, 'ease'],
            [Msg.EASING_OPTION_EASING_EASEIN, 'ease-in'],
            [Msg.EASING_OPTION_EASING_EASEOUT, 'ease-out'],
            [Msg.EASING_OPTION_EASING_EASEINOUT, 'ease-in-out'],
          ],
        },
      ],
      colour,
      output: 'String',
      tooltip: Msg.EASING_OPTION_TOOLTIP,
    });
  },
};

Blockly.JavaScript.easing = function (block) {
  const easing = block.getFieldValue('EASING');
  return [`'${easing}'`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks.bezier_easing = {
  init() {
    this.jsonInit({
      message0: Msg.BEZIER_EASING_MSG0,
      args0: [
        {
          type: 'field_number',
          name: 'X0',
          value: 0.68,
        },
        {
          type: 'field_number',
          name: 'Y0',
          value: -0.55,
        },
        {
          type: 'field_number',
          name: 'X1',
          value: 0.265,
        },
        {
          type: 'field_number',
          name: 'Y1',
          value: 1.55,
        },
      ],
      colour,
      output: 'String',
      tooltip: Msg.BEZIER_EASING_TOOLTIP,
    });
  },
};

Blockly.JavaScript.bezier_easing = function (block) {
  const x0 = block.getFieldValue('X0');
  const y0 = block.getFieldValue('Y0');
  const x1 = block.getFieldValue('X1');
  const y1 = block.getFieldValue('Y1');
  return [`'cubic-bezier(${x0},${y0},${x1},${y1})'`, Blockly.JavaScript.ORDER_NONE];
};
