import React from "react";

import { Todo as TodoType } from "../types";

const Todo: React.FC<TodoType> = (props: TodoType) => {
  const { title, description, color = "f321", bgcolor = "F123" } = props;

  return (
    <section>
      <header>{title}</header>
      <div>{description}</div>
    </section>
  );
};

export default Todo;
