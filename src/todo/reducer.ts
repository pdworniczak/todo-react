import {
  Todo,
  TodoActionTypes,
  TodoState,
  TODO_ADD,
  TODO_EDIT,
  TODO_DELETE
} from "./types";

const initialState = {
  todos: [] as Todo[]
};

export default (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case TODO_ADD:
      return {
        todos: [...state.todos, action.payload]
      };
    case TODO_EDIT:
      return {
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload.id),
          action.payload
        ]
      };
    case TODO_DELETE:
      return {
        todos: state.todos.filter(todo => todo.id !== action.meta.id)
      };
    default:
      return state;
  }
};
