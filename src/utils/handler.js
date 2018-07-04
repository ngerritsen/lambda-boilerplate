const { createErrorResponse } = require('./response');

/**
 * @param {Function} handler
 * @returns {Function}
 */
function createHandler(handler) {
  return async (event, context, callback) => {
    try {
      callback(null, await handler(event, context));
    } catch (error) {
      callback(null, createErrorResponse(error));
    }
  }
}

module.exports = createHandler;
