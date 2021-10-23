const QueryDocs = (getOrCreateStash) => (stashId, { from = 0, size = 10 }) => {
  const stash = getOrCreateStash(stashId);

  const docs = stash.listDocs();
  const docPage = docs.slice(from, from + size);

  return {
    _count: docs.length,
    _hits: docPage
  };
}

module.exports = QueryDocs;