import React, { useState, useEffect } from 'react';
import { Modal, TextField, Button } from '@material-ui/core';
import { TodoEditorContext } from './types';

import './todo.scss';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from './actions';

interface AddEditProps {
  context: TodoEditorContext;
  handleClose: () => void;
}

export default function TodoEditor({ handleClose, context: { open, todo } }: AddEditProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [titleErrorMessage, setTitleErrorMessage] = useState<string>('');

  useEffect(() => {
    setTitle((todo && todo.title) || '');
    setDescription((todo && todo.description) || '');
    setTitleErrorMessage('');
  }, [todo]);

  const dispatch = useDispatch();

  return (
    <Modal className="todo-modal__container" open={open} onClose={handleClose}>
      <article className="todo-modal__editor">
        <header>add/edit todo</header>
        <section>
          <TextField
            required
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            error={!!titleErrorMessage}
            helperText={titleErrorMessage}
          />
          <TextField label="Description" value={description} onChange={e => setDescription(e.target.value)} />
        </section>
        <footer>
          <Button
            onClick={() => {
              setTitleErrorMessage('');
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (title) {
                dispatch(
                  todo ? editTodo({ ...todo, title, description }) : addTodo({ id: Date.now(), title, description }),
                );
                setTitle('');
                setDescription('');
                handleClose();
              } else {
                setTitleErrorMessage('Title is required.');
              }
            }}
          >
            Save
          </Button>
        </footer>
      </article>
    </Modal>
  );
}
