const app = require('./lib/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`);
});