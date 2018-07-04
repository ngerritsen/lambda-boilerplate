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

describe('get()', () => {
  test('Returns the todo.', async () => {
    const testTodo = { name: 'test' };

    todoServiceMock.get.mockResolvedValue(testTodo);

    const result = await todoController.get({ id: 1 });

    expect(result).toEqual(createResponse(200, testTodo));
  });

  test('Returns a 404 when no todo was returned..', async () => {
    todoServiceMock.get.mockResolvedValue(null);

    const result = await todoController.get({ id: 1 });

    expect(result).toEqual(createResponse(404, { 'message': 'Todo with id "1" not found.' }));
  });
});
