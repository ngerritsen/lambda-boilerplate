'use strict';

const axios = require('axios');

const TodoService = require('./TodoService');
const TodoController = require('./TodoController');
const config = require('../../etc/config');

/**
 * @returns {TodoController}
 */
function createTodoController() {
  const todoService = new TodoService(axios, config.apiBaseUrl);

  return new TodoController(todoService);
}

module.exports = createTodoController;
