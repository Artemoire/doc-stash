const { getOrCreateStash } = require("../../../stash/usecase/getOrCreateStash");
const GetDocById = require("./GetDocById");

const getDocById = GetDocById(getOrCreateStash)

module.exports = {
  getDocById
}