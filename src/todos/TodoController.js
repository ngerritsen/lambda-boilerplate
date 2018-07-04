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
}

module.exports = TodoController;
