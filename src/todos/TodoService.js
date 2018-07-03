'use strict';

const { createResponse } = require('../utils/response');

class TodoService {
  /**
   * @param {Axios} axios
   */
  constructor(axios) {
    this._axios = axios;
  }

  /**
   * @returns {Promise.<Todo>}
   */
  async getAll() {
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');

    if (!todos) {
      return [];
    }

    return todos;
  }
}

module.exports = TodoService;
