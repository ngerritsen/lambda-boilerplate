'use strict';

const TodoService = require('../TodoService');

let todoService, axiosMock;

const API_BASE_URL = 'https://example.com';

beforeEach(() => {
  axiosMock = { get: jest.fn() };
  todoService = new TodoService(axiosMock, API_BASE_URL);
})

describe('getAll()', () => {
  test('Gets all the todos from the API.', async () => {
    const testTodos = [{ name: 'test' }];

    axiosMock.get.mockResolvedValue(testTodos);

    const result = await todoService.getAll();

    expect(axiosMock.get).toBeCalledWith(API_BASE_URL + '/todos');
    expect(result).toEqual(testTodos);
  });
});
