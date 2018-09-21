'use strict';

const { createResponse } = require('../utils/response');

class TodoController {
  /**
   * @param {TodoService} todoService
   */
  constructor(todoService) {
    this._todoService = todoService;
  }

  /**
   * @returns {Promise.<Todo[]>}
   */
  async getAll() {
    const todos = await this._todoService.getAll();

    return createResponse(200, todos);
  }

  /**
   * @param {Object}  event
   * @returns {Promise.<Todo[]>}
   */
  async get(event) {
    const { id } = event;
    const todo = await this._todoService.get(id);

    if (!todo) {
      return createResponse(404, { message: `Todo with id "${id}" not found.` });
    }

    return createResponse(200, todo);
  }
}

module.exports = TodoController;
