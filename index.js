'use strict';

const { createErrorResponse } = require('./src/utils/response');
const { createHandler } = require('./src/utils/handler');
const createTodoController = require('./src/todos/createTodoController');

const todoControllerFactory = new TodoControllerFactory();

const getTodos = createHandler((event, context) => {
  createTodoController().getTodos(event, context)
});

module.exports = {
  getTodos
}
