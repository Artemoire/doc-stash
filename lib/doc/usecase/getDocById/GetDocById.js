const GetDocById = (getOrCreateStash) => (stashId, docId) => {
  const stash = getOrCreateStash(stashId);
  return stash.resolveDoc(docId);
}

module.exports = GetDocById;