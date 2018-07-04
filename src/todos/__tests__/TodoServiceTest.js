'use strict';

const TodoService = require('../TodoService');

let todoService; let
  axiosMock;

const API_BASE_URL = 'https://example.com';

beforeEach(() => {
  axiosMock = { get: jest.fn() };
  todoService = new TodoService(axiosMock, API_BASE_URL);
});

describe('getAll()', () => {
  test('Gets all the todos from the API.', async () => {
    const testTodos = [{ name: 'test' }];

    axiosMock.get.mockResolvedValue({ data: testTodos });

    const result = await todoService.getAll();

    expect(axiosMock.get).toBeCalledWith(API_BASE_URL + '/todos');
    expect(result).toEqual(testTodos);
  });

  test('Returns empty array when no todos were found.', async () => {
    axiosMock.get.mockResolvedValue(null);

    const result = await todoService.getAll();

    expect(result).toEqual([]);
  });
});

describe('get()', () => {
  test('Get a todo by ID from the API.', async () => {
    const testTodo = { name: 'test' };

    axiosMock.get.mockResolvedValue({ data: testTodo });

    const result = await todoService.get(1);

    expect(axiosMock.get).toBeCalledWith(API_BASE_URL + '/todos/1');
    expect(result).toEqual(testTodo);
  });

  test('Returns null when the todo was not found.', async () => {
    axiosMock.get.mockResolvedValue(null);

    const result = await todoService.get(1);

    expect(result).toEqual(null);
  });
});
