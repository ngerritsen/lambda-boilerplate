'use strict';

const { createErrorResponse } = require('./src/utils/response');
const TodoControllerFactory = require('./src/todos/TodoControllerFactory');

const todoControllerFactory = new TodoControllerFactory();

/**
 * @param {Object}    event
 * @param {Object}    context
 * @param {Function}  callback
 * @returns {Promise}
 */
async function getTodos(event, context, callback) {
  try {
    const todoController = todoControllerFactory.create();
    const response = await todoController.getAll();

    callback(null, response);
  } catch (error) {
    callback(error, createErrorResponse(error));
  }
}

module.exports = {
  getTodos
}
