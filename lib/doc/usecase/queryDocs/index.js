const { getOrCreateStash } = require("../../../stash/usecase/getOrCreateStash");
const QueryDocs = require("./QueryDocs");

const queryDocs = QueryDocs(getOrCreateStash);

module.exports = {
  queryDocs
}