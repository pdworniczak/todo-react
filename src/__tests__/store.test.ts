import creeateStore from '../store';
import { addTodo, removeTodo, upTodo, downTodo, editTodo } from '../todo/actions';
import { Store } from 'redux';
import { TodoActionTypes, TodoState } from '../todo/types';

function addTodos(store: Store<TodoState, TodoActionTypes>, count = 3) {
  for (let i = 0; i < count; i++) {
    store.dispatch(addTodo({ id: i, title: 't', description: 'd' }));
  }
}

describe('store', () => {
  let store: Store<TodoState, TodoActionTypes>;

  beforeEach(() => {
    store = creeateStore();
  });

  test('initial state', () => {
    const state = store.getState();

    expect(state.todos).toStrictEqual([]);
  });

  test('add todos', () => {
    addTodos(store, 1);

    const state = store.getState();

    expect(state.todos.length).toBe(1);
  });

  test('add 3 todos', () => {
    addTodos(store, 3);

    const state = store.getState();

    expect(state.todos.length).toBe(3);
  });

  test('add 4 todos and remove first', () => {
    addTodos(store, 4);
    store.dispatch(removeTodo(0));

    const state = store.getState();

    expect(state.todos.length).toBe(3);
    expect(state.todos.map(todo => todo.id)).toStrictEqual([1, 2, 3]);
  });

  test('add 4 todos and remove last', () => {
    addTodos(store, 4);
    store.dispatch(removeTodo(3));

    const state = store.getState();

    expect(state.todos.length).toBe(3);
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 2]);
  });

  test('add 4 todos and remove wrong id', () => {
    addTodos(store, 4);
    store.dispatch(removeTodo(5));

    const state = store.getState();

    expect(state.todos.length).toBe(4);
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 2, 3]);
  });

  test('add 4 todos and remove wrong id', () => {
    addTodos(store, 4);
    store.dispatch(removeTodo(5));

    const state = store.getState();

    expect(state.todos.length).toBe(4);
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 2, 3]);
  });

  test('add 4 todos ond move up first', () => {
    addTodos(store, 4);
    store.dispatch(upTodo(0));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 2, 3]);
  });

  test('add 4 todos ond move down first', () => {
    addTodos(store, 4);
    store.dispatch(downTodo(0));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([1, 0, 2, 3]);
  });

  test('add 4 todos ond move up last', () => {
    addTodos(store, 4);
    store.dispatch(upTodo(3));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 3, 2]);
  });

  test('add 4 todos ond move down last', () => {
    addTodos(store, 4);
    store.dispatch(downTodo(3));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 2, 3]);
  });

  test('add 4 todos ond move up second', () => {
    addTodos(store, 4);
    store.dispatch(upTodo(1));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([1, 0, 2, 3]);
  });

  test('add 4 todos ond move down second', () => {
    addTodos(store, 4);
    store.dispatch(downTodo(1));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 2, 1, 3]);
  });

  test('add 4 todos ond move up wrong id', () => {
    addTodos(store, 4);
    store.dispatch(upTodo(5));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 2, 3]);
  });

  test('add 4 todos ond move down wrong id', () => {
    addTodos(store, 4);
    store.dispatch(downTodo(5));

    const state = store.getState();
    expect(state.todos.map(todo => todo.id)).toStrictEqual([0, 1, 2, 3]);
  });

  test('add 4 todos and edit second', () => {
    addTodos(store, 4);
    store.dispatch(editTodo({ id: 1, title: 'newtitle', description: 'd', color: '1', bgcolor: '2' }));

    const state = store.getState();
    expect(state.todos.find(todo => todo.id === 1)).toStrictEqual({
      id: 1,
      title: 'newtitle',
      description: 'd',
      color: '1',
      bgcolor: '2',
    });
  });
});
