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
    <ExpansionPanel expanded={descriptionVisible} onChange={() => toggleDescription(!descriptionVisible)}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <section>
          <header>{todo.title}</header>
          <Button size="small" onClick={edit}>
            edit
          </Button>
          <Button size="small" onClick={() => dispatch(removeTodo(todo.id))}>
            remove
          </Button>
        </section>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{todo.description}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
