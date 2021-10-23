class StashStoreMemory {

  constructor() {
    this.stashes = {};
  }

  getStash(stashId) {
    return this.stashes[stashId];
  }

  setStash(stash) {
    this.stashes[stash.id] = stash;
  }

}

module.exports = StashStoreMemory;