import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Todo from './components/Todo';
import { todosSelector } from './reducer';

export default function TodoList() {
  const todos = useSelector(todosSelector);

  return (
    <article className="todo">
      <header className="todo__header">TODO List</header>
      <Button size="small">add</Button>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} />
      ))}
    </article>
  );
}
