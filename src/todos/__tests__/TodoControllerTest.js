'use strict';

const TodoController = require('../TodoController');
const TodoService = require('../TodoService');
const { createResponse } = require('../../utils/response');

jest.mock('../TodoService');

let todoController; let
  todoServiceMock;

beforeEach(() => {
  todoServiceMock = new TodoService();
  todoController = new TodoController(todoServiceMock);
});

describe('getAll()', () => {
  test('Returns the todo\'s.', async () => {
    const testTodos = [{ name: 'test' }];

    todoServiceMock.getAll.mockResolvedValue(testTodos);

    const result = await todoController.getAll();

    expect(result).toEqual(createResponse(200, testTodos));
  });
});
