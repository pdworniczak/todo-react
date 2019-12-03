import React, { useState, useEffect } from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Fab } from '@material-ui/core';
import { ExpandMore, ArrowDropUp, ArrowDropDown, Edit, Delete } from '@material-ui/icons';

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

  useEffect(() => {
    toggleDescription(false);
  }, [todo]);

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
        <section className="todo__header">
          <header className="todo__title">
            <h4>{todo.title}</h4>
          </header>
          <div className="todo__buttons">
            <Fab
              size="small"
              onClick={e => {
                e.stopPropagation();
                edit();
              }}
              style={{
                background: todo.bgcolor,
                color: todo.color,
              }}
            >
              <Edit style={{ fontSize: '.8em' }} />
            </Fab>
            <Fab
              size="small"
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{
                background: todo.bgcolor,
                color: todo.color,
              }}
            >
              <Delete style={{ fontSize: '.8em' }} />
            </Fab>
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
          </div>
        </section>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{todo.description}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
