const Blockly = require('blockly');

/* eslint-disable */
Blockly.Blocks.procedures_defreturn.updateVarName = function (variable) {
  var newName = variable.name;
  var change = false;
  for (var i = 0; i < this.argumentVarModels_.length; i++) {
    if (this.argumentVarModels_[i].getId() == variable.getId()) {
      var oldName = this.arguments_[i];
      this.arguments_[i] = newName;
      change = true;
    }
  }
  if (change) {
    this.displayRenamedVar_(oldName, newName);
    Blockly.Procedures.mutateCallers(this);
  }
};

Blockly.Blocks.procedures_callreturn.setProcedureParameters_ = function(paramNames, paramIds) {
  // Data structures:
  // this.arguments = ['x', 'y']
  //     Existing param names.
  // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
  //     Look-up of paramIds to connections plugged into the call block.
  // this.quarkIds_ = ['piua', 'f8b_']
  //     Existing param IDs.
  // Note that quarkConnections_ may include IDs that no longer exist, but
  // which might reappear if a param is reattached in the mutator.
  var defBlock = Blockly.Procedures.getDefinition(this.getProcedureCall(),
      this.workspace);
  var mutatorOpen = defBlock && defBlock.mutator &&
      defBlock.mutator.isVisible();
  if (!mutatorOpen) {
    this.quarkConnections_ = {};
    this.quarkIds_ = null;
  }
  if (!paramIds) {
    // Reset the quarks (a mutator is about to open).
    return;
  }
  // Test arguments (arrays of strings) for changes. '\n' is not a valid
  // argument name character, so it is a valid delimiter here.
  if (paramNames.join('\n') == this.arguments_.join('\n')) {
    // No change.
    this.quarkIds_ = paramIds;
    return;
  }
  if (paramIds.length != paramNames.length) {
    throw RangeError('paramNames and paramIds must be the same length.');
  }
  this.setCollapsed(false);
  if (!this.quarkIds_) {
    // Initialize tracking for this block.
    this.quarkConnections_ = {};
    this.quarkIds_ = [];
  }
  // Switch off rendering while the block is rebuilt.
  var savedRendered = this.rendered;
  this.rendered = false;
  // Update the quarkConnections_ with existing connections.
  for (var i = 0; i < this.arguments_.length; i++) {
    var input = this.getInput('ARG' + i);
    if (input) {
      var connection = input.connection.targetConnection;
      this.quarkConnections_[this.quarkIds_[i]] = connection;
      if (mutatorOpen && connection &&
          paramIds.indexOf(this.quarkIds_[i]) == -1) {
        // This connection should no longer be attached to this block.
        connection.disconnect();
        connection.getSourceBlock().bumpNeighbours_();
      }
    }
  }
  // Rebuild the block's arguments.
  this.arguments_ = [].concat(paramNames);
  // And rebuild the argument model list.

  // this.argumentVarModels_ = [];
  // for (var i = 0; i < this.arguments_.length; i++) {
  //   var variable = Blockly.Variables.getOrCreateVariablePackage(
  //       this.workspace, null, this.arguments_[i], '');
  //   this.argumentVarModels_.push(variable);
  // }

  this.updateShape_();
  this.quarkIds_ = paramIds;
  // Reconnect any child blocks.
  if (this.quarkIds_) {
    for (var i = 0; i < this.arguments_.length; i++) {
      var quarkId = this.quarkIds_[i];
      if (quarkId in this.quarkConnections_) {
        var connection = this.quarkConnections_[quarkId];
        if (!Blockly.Mutator.reconnect(connection, this, 'ARG' + i)) {
          // Block no longer exists or has been attached elsewhere.
          delete this.quarkConnections_[quarkId];
        }
      }
    }
  }
  // Restore rendering and show the changes.
  this.rendered = savedRendered;
  if (this.rendered) {
    this.render();
  }
};
