export interface NewTodo {
  title: string;
  description: string;
  bgcolor?: string;
  color?: string;
}

export interface Todo extends NewTodo {
  id: number;
}

export interface TodoState {
  todos: Todo[];
}

export const TODO_ADD = "TODO_ADD";
export const TODO_EDIT = "TODO_EDIT";
export const TODO_DELETE = "TODO_DELETE";

export interface TodoAddAction {
  type: typeof TODO_ADD;
  payload: Todo;
}

export interface TodoEditAction {
  type: typeof TODO_EDIT;
  payload: Todo
}

export interface TodoDeleteAction {
  type: typeof TODO_DELETE;
  meta: {
    id: number;
  };
}

export type TodoActionTypes = TodoAddAction | TodoEditAction | TodoDeleteAction;
