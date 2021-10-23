const express = require('express');
const router = express.Router();

const { getOrCreateStash } = require('../../stash/usecase/getOrCreateStash');
const { createOrUpdateDoc } = require('../../doc/usecase/createOrUpdateDoc');
const { getDocById } = require('../../doc/usecase/getDocById');
const { queryDocs } = require('../../doc/usecase/queryDocs');

router.get('/:stashId', function (req, res) {
  const stashId = req.params.stashId;
  const stash = getOrCreateStash(stashId);

  res.json(stash);
});

router.post('/:stashId/_doc', function (req, res) {
  const source = req.body;
  const stashId = req.params.stashId;

  const doc = createOrUpdateDoc(stashId, source);
  res.json({ _status: true, _id: doc._id });
});

router.get('/:stashId/_doc/_search', function (req, res) {
  const stashId = req.params.stashId;
  const from = req.query.from;
  const size = req.query.size;

  const result = queryDocs(stashId, { from, size });
  res.json(result);
});

router.get('/:stashId/_doc/:docId', function (req, res) {
  const stashId = req.params.stashId;
  const docId = req.params.docId;

  const doc = getDocById(stashId, docId);
  if (!doc) res.status(404).send();
  else res.json(doc);
});

module.exports = router;