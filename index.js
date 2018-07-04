'use strict';

const createHandler = require('./src/utils/handler');
const createTodoController = require('./src/todos/createTodoController');

const getTodos = createHandler((event, context) => {
  return createTodoController().getAll(event, context)
});

const getTodo = createHandler((event, context) => {
  return createTodoController().get(event, context)
});

module.exports = {
  getTodos,
  getTodo
};
