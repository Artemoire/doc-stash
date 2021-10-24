class StashStoreMemory {

  constructor() {
    this.stashes = {};
  }

  getStash(stashId) {
    return this.stashes[stashId];
  }

  setStash(stash) {
    this.stashes[stash._id] = stash;
  }

}

module.exports = StashStoreMemory;