import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Todo from './Todo';
import { todosSelector } from './reducer';
import TodoEditor from './TodoEditor';
import { TodoEditorContext } from './types';

export default function TodoList() {
  const todos = useSelector(todosSelector);
  const [todoEditor, setTodoEditor] = useState<TodoEditorContext>({ open: false });

  return (
    <>
      <article className="todo-list">
        <header className="todo-list__header">
          <h1>TODO List</h1>
          <Button
            className="todo-list__button"
            size="small"
            variant="outlined"
            onClick={() => setTodoEditor({ open: true })}
          >
            add
          </Button>
        </header>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} edit={() => setTodoEditor({ open: true, todo })} />
        ))}
      </article>
      <TodoEditor context={todoEditor} handleClose={() => setTodoEditor({ open: false })} />
    </>
  );
}
