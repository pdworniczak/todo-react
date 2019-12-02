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
      <article className="todo">
        <header className="todo__header">TODO List</header>
        <Button size="small" onClick={() => setTodoEditor({ open: true })}>
          add
        </Button>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} edit={() => setTodoEditor({ open: true, todo })} />
        ))}
      </article>
      <TodoEditor context={todoEditor} handleClose={() => setTodoEditor({ open: false })} />
    </>
  );
}
