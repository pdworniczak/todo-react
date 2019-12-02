import React, { useState } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Todo as TodoType } from './types';
import './todo.scss';
import { useDispatch } from 'react-redux';
import { removeTodo } from './actions';

interface TodoProps {
  todo: TodoType;
  edit: () => void;
}

export default function Todo(props: TodoProps) {
  const { todo, edit } = props;

  const [descriptionVisible, toggleDescription] = useState(false);

  const dispatch = useDispatch();

  return (
    <ExpansionPanel
      style={{
        background: todo.bgcolor,
        color: todo.color,
      }}
      expanded={descriptionVisible}
      onChange={() => todo.description && toggleDescription(!descriptionVisible)}
    >
      <ExpansionPanelSummary
        expandIcon={
          todo.description && (
            <ExpandMoreIcon
              style={{
                color: todo.color,
              }}
            />
          )
        }
      >
        <section>
          <header>{todo.title}</header>
          <Button
            style={{
              color: todo.color,
            }}
            size="small"
            onClick={edit}
          >
            edit
          </Button>
          <Button
            style={{
              color: todo.color,
            }}
            size="small"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            remove
          </Button>
        </section>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{todo.description}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
