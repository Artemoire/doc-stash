const GetOrCreateStash = require("./GetOrCreateStash");
const { stashStore } = require('../../store');

const getOrCreateStash = GetOrCreateStash(stashStore);

module.exports = {
  getOrCreateStash
}