import React from 'react';
import { create } from 'react-test-renderer';

import Todo from '../../todo/Todo';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
}));

describe('Todo component', () => {
  test('check if component render', () => {
    const component = create(<Todo todo={{ id: 0, title: 'title', description: '' }} edit={() => null} />);
    const instance = component.root;
    expect(instance.findAllByType('h4')[0].props.children).toBe('title');
  });

  xtest('check initail state', () => {
    const component = create(<Todo todo={{ id: 0, title: 'title', description: '' }} edit={() => null} />);
    expect(component.root.instance.state.descriptionVisible).toBe(false);
  });
});
