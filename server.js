const express = require('express');
const jsonServer = require('json-server');

const server = express();

server.use('/api', jsonServer.router('db.json'))

server.listen(3000, () =>
  console.log(`Hola~ Listening!`),
)