import React from 'react';
import { create, act } from 'react-test-renderer';

import Todo from '../../todo/Todo';
import { Button } from '@material-ui/core';

jest.mock('react-redux');

describe('Todo component', () => {
  test('check if component render', () => {
    const component = create(<Todo todo={{ id: 0, title: 'title', description: '' }} edit={() => null} />);
    const instance = component.root;
    expect(instance.findAllByType('h4')[0].props.children).toBe('title');
  });
});
