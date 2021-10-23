const { v4: uuid } = require('uuid');

const CreateOrUpdateDoc = (getOrCreateStash) => (stashId, source, id) => {
  id = id || uuid();
  const stash = getOrCreateStash(stashId);
  return stash.setDoc(id, source);
}

module.exports = CreateOrUpdateDoc;