#!/usr/bin/env node

const { Command } = require('commander');
const app = require('../lib/app');
const package = require('../package.json');
const program = new Command('doc-stash');

program
  .version(package.version)
  .option('-p, --port <number>', 'port number', 3000)
  .action((options) => {
    const PORT = normalizePort(options.port);

    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}/`);
    });
  })

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

program.parse(process.argv);