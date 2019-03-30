const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

server.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

server.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

server.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

server.listen(3000, () =>
  console.log(`Example server listening on port 3000!`),
);