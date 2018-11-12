/* global spritly */
(function () {
  const Blocks = spritly.Blockly.Blocks;
  const JavaScript = spritly.Blockly.JavaScript;
  const Dropdown = spritly.Dropdown;
  const Events = spritly.Blockly.Events;

  Blocks.fly_forward = {
    init() {
      this.jsonInit({
        message0: '向前飞一格',
        colour: 130,
        nextStatement: 'Statement',
        previousStatement: 'Statement',
      });
    },
  };

  JavaScript.fly_forward = function (block) {
    return 'await forward();\n';
  };

  Blocks.fly_turnleft = {
    init() {
      this.jsonInit({
        message0: '向左转⤴️',
        colour: 160,
        nextStatement: 'Statement',
        previousStatement: 'Statement',
      });
    },
  };

  JavaScript.fly_turnleft = function (block) {
    return 'await turnLeft();\n';
  };

  Blocks.fly_turnright = {
    init() {
      this.jsonInit({
        message0: '向右转⤵️',
        colour: 160,
        nextStatement: 'Statement',
        previousStatement: 'Statement',
      });
    },
  };

  JavaScript.fly_turnright = function (block) {
    return 'await turnRight();\n';
  };

  Blocks.fly_proc_def = {
    init() {
      this.jsonInit({
        message0: '定义过程 %1',
        args0: [
          {
            type: 'field_input',
            name: 'NAME',
            text: '过程_0',
          },
        ],
        message1: '执行 %1',
        args1: [
          {
            type: 'input_statement',
            name: 'PROC',
            check: 'Statement',
          },
        ],
        colour: 260,
      });
    },
    onchange(event) {
      if(event.blockId === this.id && event instanceof Events.Create) {
        const blocks = this.workspace.getBlocksByType('fly_proc_def');
        if(blocks.length > 1) {
          const names = new Set();
          for(let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            let name = block.getFieldValue('NAME');
            if(!names.has(name)) {
              names.add(name);
            } else {
              const matched = name.match(/\d+$/);
              if(matched) {
                name = `${name.replace(/\d+$/, '')}${Number(matched[0]) + 1}`;
              } else {
                name = `${name}2`;
              }
              block.setFieldValue(name, 'NAME');
              i--;
            }
          }
        }
      }
    },
    scope: true,
  };

  JavaScript.fly_proc_def = function (block) {
    const name = block.getFieldValue('NAME');
    const code = JavaScript.statementToCode(block, 'PROC') || '';
    return `async function ${name}(){
${code}}\n`;
  };

  Blocks.fly_proc_call = {
    init() {
      this.jsonInit({
        message0: '执行过程 %1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'NAME',
            options: () => {
              const procNames = Dropdown.get('FlyProcNames');
              if(procNames.length) {
                return procNames.map(s => [s, s]);
              }
              return [['', '']];
            },
          },
        ],
        nextStatement: 'Statement',
        previousStatement: 'Statement',
        colour: 70,
      });
    },
  };

  JavaScript.fly_proc_call = function (block) {
    const funcName = block.getFieldValue('NAME') || 'void';
    return `await ${funcName}(0);\n`;
  };

  Dropdown.addBlockFields('FlyProcNames', 'fly_proc_def', 'NAME');
}());
