const Stash = require('../../domain/stash');

const GetOrCreateStash = (stashStore) => (stashId) => {
  let stash = stashStore.getStash(stashId);
  if (stash === undefined) {
    stash = new Stash(stashId);
    stashStore.setStash(stash);
  }
  return stash;
}

module.exports = GetOrCreateStash;