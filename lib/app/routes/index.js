const express = require('express');
const router = express.Router();

const { performance } = require('perf_hooks');
const package = require('../../../package.json');

router.get('/', function (req, res) {
  const now = performance.now();

  res.json({
    _version: `doc-stash@${package.version}`,
    _running: now
  });
});

module.exports = router;