const { default: axios } = require("axios");

class DocStashClient {

  constructor({ baseURL }) {
    this.baseURL = baseURL;
  }

  async send(command) {
    const res = await axios({
      baseURL: this.baseURL,
      url: command.url,
      method: command.method,
      data: command.data,
    })

    return res.data;
  }

}

module.exports = DocStashClient;