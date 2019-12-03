import React, { useState } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button, Fab } from '@material-ui/core';
import { ExpandMore, ArrowDropUp, ArrowDropDown } from '@material-ui/icons';

import { Todo as TodoType } from './types';
import './todo.scss';
import { useDispatch } from 'react-redux';
import { removeTodo, upTodo, downTodo } from './actions';

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
            <ExpandMore
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
            onClick={e => {
              e.stopPropagation();
              edit();
            }}
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
          <Fab
            size="small"
            onClick={e => {
              e.stopPropagation();
              dispatch(upTodo(todo.id));
            }}
            style={{
              background: todo.bgcolor,
              color: todo.color,
            }}
          >
            <ArrowDropUp />
          </Fab>
          <Fab
            size="small"
            onClick={e => {
              e.stopPropagation();
              dispatch(downTodo(todo.id));
            }}
            style={{
              background: todo.bgcolor,
              color: todo.color,
            }}
          >
            <ArrowDropDown />
          </Fab>
        </section>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{todo.description}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
