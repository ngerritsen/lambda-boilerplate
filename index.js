'use strict';

const createHandler = require('./src/utils/handler');
const createTodoController = require('./src/todos/createTodoController');

const getTodos = createHandler(() => createTodoController().getAll());

module.exports = {
  getTodos
};
