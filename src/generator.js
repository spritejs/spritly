
const Blockly = require('blockly');

Blockly.Generator.prototype.indent = function (code) {
  return this.prefixLines(code, this.INDENT);
};

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.JavaScript.init = function (workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.JavaScript.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.JavaScript.functionNames_ = Object.create(null);

  if(!Blockly.JavaScript.variableDB_) {
    Blockly.JavaScript.variableDB_ = new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);
  } else {
    Blockly.JavaScript.variableDB_.reset();
  }

  Blockly.JavaScript.variableDB_.setVariableMap(workspace.getVariableMap());

  const defvars = [];
  // Add developer variables (not created or named by the user).
  const devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for(let i = 0; i < devVarList.length; i++) {
    defvars.push(Blockly.JavaScript.variableDB_.getName(devVarList[i],
      Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  // Add user variables, but only ones that are being used.
  const variables = Blockly.Variables.allUsedVarModels(workspace).filter(v => v.getId().indexOf('ARGS$$') !== 0);
  for(let i = 0; i < variables.length; i++) {
    defvars.push(Blockly.JavaScript.variableDB_.getName(variables[i].getId(),
      Blockly.Variables.NAME_TYPE));
  }

  // Declare all of the variables.
  if(defvars.length) {
    Blockly.JavaScript.definitions_.variables = `let ${defvars.join(', ')};`;
  }
};

Blockly.Generator.prototype.workspaceToCode = function (workspace) {
  if(!workspace) {
    // Backwards compatibility from before there could be multiple workspaces.
    console.warn('No workspace specified in workspaceToCode call.  Guessing.');
    workspace = Blockly.getMainWorkspace();
  }
  let code = [];
  this.init(workspace);

  let blocks = workspace.getTopBlocks(true);
  blocks = blocks.filter(block => block.scope);

  for(let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    let line = this.blockToCode(block);
    if(Array.isArray(line)) {
      // Value blocks return tuples of code and operator order.
      // Top-level blocks don't care about operator order.
      line = line[0];
    }
    if(line) {
      if(block.outputConnection) {
        // This block is a naked value.  Ask the language's code generator if
        // it wants to append a semicolon, or something.
        line = this.scrubNakedValue(line);
      }
      if(typeof block.scope === 'function') {
        line = block.scope(this, line);
      }
      code.push(line);
    }
  }
  code = code.join('\n'); // Blank line between each section.
  code = this.finish(code);
  // Final scrubbing of whitespace.
  code = code.replace(/^\s+\n/, '');
  code = code.replace(/\n\s+$/, '\n');
  code = code.replace(/[ \t]+\n/g, '\n');
  return code;
};
