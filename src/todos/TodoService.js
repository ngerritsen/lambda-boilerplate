'use strict';

/**
 * @typedef {Object} Todo
 */

class TodoService {
  /**
   * @param {Axios}   axios
   * @param {string}  apiBaseUrl
   */
  constructor(axios, apiBaseUrl) {
    this._axios = axios;
    this._apiBaseUrl = apiBaseUrl;
  }

  /**
   * @returns {Promise.<Todo[]>}
   */
  async getAll() {
    const todos = await this._axios.get(this._apiBaseUrl + '/todos');

    if (!todos) {
      return [];
    }

    return todos;
  }
}

module.exports = TodoService;
