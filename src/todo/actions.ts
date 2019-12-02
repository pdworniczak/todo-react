import {
  Todo,
  TodoActionTypes,
  TODO_ADD,
  TODO_EDIT,
  TODO_REMOVE
} from "./types";

export function addTodo(todo: Todo): TodoActionTypes {
  return {
    type: TODO_ADD,
    payload: todo
  };
}

export function editTodo(todo: Todo): TodoActionTypes {
  return {
    type: TODO_EDIT,
    payload: todo
  };
}

export function removeTodo(id: number): TodoActionTypes {
  return {
    type: TODO_REMOVE,
    meta: { id }
  };
}
