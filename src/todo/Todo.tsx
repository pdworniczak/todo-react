import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { Todo as TodoType } from './types';
import { CardHeader } from '@material-ui/core';
import './todo.scss';
import { useDispatch } from 'react-redux';
import { removeTodo } from './actions';

interface TodoProps {
  todo: TodoType;
  edit: () => void;
}

export default function Todo(props: TodoProps) {
  const { todo, edit } = props;

  const dispatch = useDispatch();

  return (
    <Card>
      <CardHeader
        title={todo.title}
        action={
          <>
            <Button size="small" onClick={edit}>
              edit
            </Button>
            <Button size="small" onClick={() => dispatch(removeTodo(todo.id))}>
              remove
            </Button>
          </>
        }
      />
      <CardContent>{todo.description}</CardContent>
    </Card>
  );
}
