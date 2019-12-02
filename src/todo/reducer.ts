import { Todo, TodoActionTypes, TodoState, TODO_ADD, TODO_EDIT, TODO_REMOVE } from './types';

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
      const todos = [...state.todos.filter(todo => todo.id !== action.payload.id), action.payload];

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
    default:
      return state;
  }
};

const todosSelector = (state: TodoState) => state.todos;

export { todosSelector };
