const Doc = require("../../doc/domain/doc");

class Stash {

  constructor(id) {
    this.id = id;
    this.docs = {};
  }

  resolve(id) {
    return this.docs[id];
  }

  set(id, source) {
    if (this.resolve(id) === undefined) return false;
    this.docs[id] = new Doc(id, source);
    return true;
  }

  list() {
    return Object.values(this.docs);
  }

}

module.exports = Stash;