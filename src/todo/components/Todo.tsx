import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import { Todo as TodoType } from "../types";
import { CardHeader } from "@material-ui/core";

export default function Todo(props: TodoType) {
  const { title, description, color = "f321", bgcolor = "F123" } = props;

  return (
    <Card>
      <CardHeader
        title={title}
        action={
          // <div>action</div>
          <>
            <Button size="small">edit</Button>
            <Button size="small">remove</Button>
          </>
        }
      />
      <CardContent>{description}</CardContent>
    </Card>
  );
}
