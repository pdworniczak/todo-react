import { Todo, TodoActionTypes, TodoState, TODO_ADD, TODO_EDIT, TODO_REMOVE, TODO_DOWN, TODO_UP } from './types';

const initialState = {
  todos: [{ id: 0, title: 'redux title', description: 'im inside redux' }] as Todo[],
};

export default (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case TODO_ADD: {
      const todos = [...state.todos, action.payload];

      console.log(todos);

      return {
        todos,
      };
    }
    case TODO_EDIT: {
      const todos = [...state.todos];
      todos.splice(
        state.todos.findIndex(todo => todo.id === action.payload.id),
        1,
        action.payload,
      );

      console.log(todos);

      return {
        todos,
      };
    }
    case TODO_REMOVE: {
      const todos = state.todos.filter(todo => todo.id !== action.meta.id);

      console.log(todos);

      return {
        todos,
      };
    }
    case TODO_UP: {
      const todos = [...state.todos];
      const todoIndex = state.todos.findIndex(todo => todo.id === action.meta.id);

      if (todoIndex > 0) {
        const todo = todos.splice(todoIndex, 1)[0];

        todos.splice(todoIndex - 1, 0, todo);
      }

      console.log(todos);

      return {
        todos,
      };
    }
    case TODO_DOWN: {
      const todos = [...state.todos];
      const todoIndex = state.todos.findIndex(todo => todo.id === action.meta.id);

      if (todoIndex !== -1 && todoIndex < todos.length - 1) {
        const todo = todos.splice(todoIndex, 1)[0];

        todos.splice(todoIndex + 1, 0, todo);
      }

      console.log(todos);

      return {
        todos,
      };
    }
    default:
      return state;
  }
};

const todosSelector = (state: TodoState) => state.todos;

export { todosSelector };
