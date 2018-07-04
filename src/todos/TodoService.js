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

    if (!result || !result.data) {
      return [];
    }

    return result.data;
  }

  /**
   * @param {string}  id
   * @returns {Promise.<Todo[]>}
   */
  async get(id) {
    try {
      const result = await this._axios.get(this._apiBaseUrl + '/todos/' + id);

      return result.data;
    } catch (error) {
      if (error.response.status === 404) {
        return null;
      }

      throw error;
    }
  }
}

module.exports = TodoService;
