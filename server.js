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

Object.keys(handlers).forEach((handlerKey) => {
  app.all('/' + handlerKey, proxyHandler(handlerKey));
});

function proxyHandler(handlerKey) {
  return (req, res) => {
    const body = typeof req.body === 'object' ? req.body : {};
    const { event = {}, context = {} } = body;

    handlers[handlerKey](event, context, (error, response) => {
      if (error) {
        res.status(500).send(error).end();
        return;
      }

      res.status(response.statusCode)
        .json(JSON.parse(response.body));
    });
  }
}

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }

  console.log('Lambda running at localhost:' + PORT);
});
