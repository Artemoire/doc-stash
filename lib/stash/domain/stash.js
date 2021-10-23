const Doc = require("../../doc/domain/doc");

class Stash {

  constructor(id) {
    this._id = id;
    this._docs = {};
  }

  resolveDoc(id) {
    return this._docs[id];
  }

  setDoc(id, source) {
    return this._docs[id] = new Doc(id, source);
  }

  listDocs() {
    return Object.values(this._docs);
  }

}

module.exports = Stash;