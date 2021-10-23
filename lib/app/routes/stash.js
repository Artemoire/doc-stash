const express = require('express');
const router = express.Router();

const { getOrCreateStash } = require('../../stash/usecase/getOrCreateStash');

router.get('/:stashId', function (req, res) {
  const stash = getOrCreateStash(req.params.stashId);

  res.json(stash);
});

router.put('/:storeId/_st', function (req, res) {

});

module.exports = router;