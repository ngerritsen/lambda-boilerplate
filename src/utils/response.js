'use strict';

/**
 * @param {number}  statusCode
 * @param {*}       body
 * @returns {Object}
 */
function createResponse(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

/**
 * @param {Error} error
 * @returns {Object}
 */
function createErrorResponse(error) {
  return createResponse(500, {
    message: error.stack
  });
}

module.exports = {
  createResponse,
  createErrorResponse
};
