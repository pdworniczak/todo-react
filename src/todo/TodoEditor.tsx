import React, { useState, useEffect } from 'react';
import { Modal, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import './todo.scss';
import { addTodo, editTodo } from './actions';
import { TodoEditorContext } from './types';

interface AddEditProps {
  context: TodoEditorContext;
  handleClose: () => void;
}

const colors = [
  '#000000',
  '#C0C0C0',
  '#808080',
  '#000080',
  '#0000FF',
  '#00FFFF',
  '#008080',
  '#800080',
  '#FF00FF',
  '#FFFFFF',
  '#00FF00',
  '#008000',
  '#800000',
  '#FF0000',
  '#FFA500',
  '#FFFF00',
  '#808000',
];

const DEFAULT_BG_COLOR = '#FFFFFF';
const DEFAULT_FONT_COLOR = '#000000';

export default function TodoEditor({ handleClose, context: { open, todo } }: AddEditProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>(DEFAULT_BG_COLOR);
  const [fontColor, setFontColor] = useState<string>(DEFAULT_FONT_COLOR);
  const [titleErrorMessage, setTitleErrorMessage] = useState<string>('');

  useEffect(() => {
    setTitle((todo && todo.title) || '');
    setDescription((todo && todo.description) || '');
    setTitleErrorMessage('');
    setBackgroundColor((todo && todo.bgcolor) || DEFAULT_BG_COLOR);
    setFontColor((todo && todo.color) || DEFAULT_FONT_COLOR);
  }, [todo]);

  const dispatch = useDispatch();

  return (
    <Modal className="todo-modal__container" open={open} onClose={handleClose}>
      <article
        className="todo-modal__editor"
        style={{
          background: backgroundColor,
          color: fontColor,
        }}
      >
        <header>add/edit todo</header>
        <section>
          <TextField
            required
            label="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            error={!!titleErrorMessage}
            helperText={titleErrorMessage}
            inputProps={{
              style: {
                color: fontColor,
              },
            }}
          />
          <TextField
            label="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            inputProps={{
              style: {
                color: fontColor,
              },
            }}
          />
          <FormControl>
            <InputLabel
              style={{
                color: fontColor,
              }}
            >
              background
            </InputLabel>
            <Select
              style={{ background: backgroundColor }}
              value={backgroundColor}
              onChange={e => setBackgroundColor(e.target.value as string)}
            >
              {colors.map((color, index) => (
                <MenuItem key={index} value={color} style={{ background: color }}></MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel
              style={{
                color: fontColor,
              }}
            >
              font
            </InputLabel>
            <Select
              style={{ background: fontColor }}
              value={fontColor}
              onChange={e => setFontColor(e.target.value as string)}
            >
              {colors.map((color, index) => (
                <MenuItem key={index} value={color} style={{ background: color }}></MenuItem>
              ))}
            </Select>
          </FormControl>
        </section>
        <footer>
          <Button
            onClick={() => {
              setTitleErrorMessage('');
              handleClose();
            }}
            style={{
              color: fontColor,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (title) {
                dispatch(
                  todo
                    ? editTodo({ ...todo, title, description, bgcolor: backgroundColor, color: fontColor })
                    : addTodo({ id: Date.now(), title, description, bgcolor: backgroundColor, color: fontColor }),
                );
                setTitle('');
                setDescription('');
                setBackgroundColor(DEFAULT_BG_COLOR);
                setFontColor(DEFAULT_FONT_COLOR);
                setTitleErrorMessage('');
                handleClose();
              } else {
                setTitleErrorMessage('Title is required.');
              }
            }}
            style={{
              color: fontColor,
            }}
          >
            Save
          </Button>
        </footer>
      </article>
    </Modal>
  );
}
