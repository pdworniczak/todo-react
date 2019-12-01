import React from "react";

import Todo from "./components/Todo";
import { Todo as TodoType } from "./types";

const todos: TodoType[] = [
  { id: 1, title: "test", description: "description" }
];

const TodoList: React.FC = () => {
  return (
    <article>
      <header>TODO List</header>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} />
      ))}
    </article>
  );
};

export default TodoList;
