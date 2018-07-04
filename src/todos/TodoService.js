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
    const result = await this._axios.get(this._apiBaseUrl + '/todos');

    if (!result) {
      return [];
    }

    return result.data;
  }
}

module.exports = TodoService;
