'use strict';

const axios = require('axios');

const TodoService = require('./TodoService');
const TodoController = require('./TodoController');

class TodoControllerFactory {
  /**
   * @returns {TodoController}
   */
  create() {
    const todoService = new TodoService(axios);

    return new TodoController(todoService);
  }
}
