const ClientCommand = require("./ClientCommand");

class CreateDocCommand extends ClientCommand {
  constructor({ stashId, source }) {
    super('post', `/_stash/${stashId}/_doc`, source);
  }
}

module.exports = CreateDocCommand;