/* global spritly */
(function () {
  const Blocks = spritly.Blockly.Blocks;
  const JavaScript = spritly.Blockly.JavaScript;

  Blocks.fly_forward = {
    init() {
      this.jsonInit({
        message0: '向前飞一格',
        colour: 160,
        nextStatement: 'Statement',
        previousStatement: 'Statement',
      });
    },
  };

  JavaScript.fly_forward = function (block) {
    return 'await forward();\n';
  };

  Blocks.fly_turn = {
    init() {
      this.jsonInit({
        message0: '向%1转',
        args0: [
          {
            type: 'field_dropdown',
            name: 'DIRECTION',
            options: [
              ['左', 'Left'],
              ['右', 'Right'],
            ],
          },
        ],
        nextStatement: 'Statement',
        previousStatement: 'Statement',
        colour: 230,
      });
    },
  };

  JavaScript.fly_turn = function (block) {
    const direction = block.getFieldValue('DIRECTION');
    return `await turn${direction}();\n`;
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
        colour: 15,
      });
    },
    scope: true,
    created(event) {
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
              name = `${name}0`;
            }
            block.setFieldValue(name, 'NAME');
            i--;
          }
        }
      }
    },
  };
  JavaScript.fly_proc_def = function (block) {
    const funcName = block.getFieldValue('NAME');
    const code = JavaScript.statementToCode(block, 'PROC') || '';
    return `async function ${funcName}(){
${code}}\n`;
  };

  Blocks.fly_proc_call = {
    init() {
      this.jsonInit({
        message0: '执行 %1',
        args0: [
          {
            type: 'field_dropdown',
            name: 'NAME',
            options: () => {
              const blocks = this.workspace.getBlocksByType('fly_proc_def');
              if(blocks.length) {
                return blocks.map((block) => {
                  const name = block.getFieldValue('NAME');
                  return [name, name];
                });
              }
              return [['', '']];
            },
          },
        ],
        previousStatement: 'Statement',
        nextStatement: 'Statement',
        colour: 100,
      });
    },
  };

  JavaScript.fly_proc_call = function (block) {
    const name = block.getFieldValue('NAME');
    return `await ${name}();\n`;
  };
}());
