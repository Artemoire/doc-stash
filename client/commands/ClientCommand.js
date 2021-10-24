class ClientCommand {

  constructor(method, url, data) {
    this.url = url;
    this.method = method;
    this.data = data;
  }

}

module.exports = ClientCommand;