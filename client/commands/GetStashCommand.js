const ClientCommand = require("./ClientCommand");

class GetStashCommand extends ClientCommand {

  constructor({ stashId }) {
    super('get', '/_stash/' + stashId);
  }

}

module.exports = GetStashCommand;