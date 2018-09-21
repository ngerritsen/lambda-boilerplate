'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const handlers = require('./index');

const PORT = 8080;
const app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.post('/', (req, res) => {
  const body = req.body : {};

  if (typeof body === 'object') {
    res.status(400).send('Please provide a valid json body.'); 
  }

  const { handler = '', event = {}, context = {} } = body;

  if (typeof handlers[handler] !== 'function') {
    res.status(404).send(`Provided handler "${handler}" not found.`); 
  }

  handlers[handler](event, context, (error, response) => {
    if (error) {
      res.status(500).send(error).end();
      return;
    }

    res.status(response.statusCode)
      .json(JSON.parse(response.body));
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }

  console.log('Lambda running at localhost:' + PORT);
});
