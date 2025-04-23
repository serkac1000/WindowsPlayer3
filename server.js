
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const host = process.env.REPL_SLUG ? '0.0.0.0' : 'localhost';
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
