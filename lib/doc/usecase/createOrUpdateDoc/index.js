const { getOrCreateStash } = require("../../../stash/usecase/getOrCreateStash");
const CreateOrUpdateDoc = require("./CreateOrUpdateDoc");

const createOrUpdateDoc = CreateOrUpdateDoc(getOrCreateStash);

module.exports = {
  createOrUpdateDoc
}