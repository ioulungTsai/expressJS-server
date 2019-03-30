const express = require('express');
const jsonServer = require('json-server');

const server = express();

const auth = (req, res, next) => {
  console.log(typeof req.query.token);
  if (req.query.token === '123') {
    next();
  } else {
    res.send('Nono!!');
  }
};

server.use('/api', auth, jsonServer.router('db.json'));

server.listen(3000, () =>
  console.log(`Hola~ Listening!`)
);
