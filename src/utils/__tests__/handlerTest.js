'use strict';

const createHandler = require('../handler');
const { createResponse, createErrorResponse } = require('../response');

test('Calls the callback with the handler response.', async () => {
  const callback = jest.fn();
  const handlerFn = jest.fn(() => createResponse(200, 'ok'));
  const testEvent = { event: 'event' };
  const testContext = { context: 'context' };

  const handler = createHandler(handlerFn);

  await handler(testEvent, testContext, callback);

  expect(handlerFn).toBeCalledWith(testEvent, testContext);
  expect(callback).toBeCalledWith(null, createResponse(200, 'ok'));
});

test('Calls the callback with the error response when the handler rejects.', async () => {
  const callback = jest.fn();
  const error = new Error('test');

  const handler = createHandler(() => Promise.reject(error));

  await handler(null, null, callback);

  expect(callback).toBeCalledWith(null, createErrorResponse(error));
});
