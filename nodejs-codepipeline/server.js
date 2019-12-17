const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  console.log('New request received');
  res.send({'data': 'Health Check Succesfull'});
});

app.get('/hello-world', (req, res) => {
  console.log('New request received');
  res.send({'data': 'Hello World'});
});

app.get('/v2/hello-world', (req, res) => {
  console.log('New request received');
  res.send({'data': 'Hello World from version 2!'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));