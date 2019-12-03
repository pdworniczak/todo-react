import React from 'react';
import { Provider } from 'react-redux';

import TodoList from './todo/TodoList';
import store from './store';

const App: React.FC = () => {
  return (
    <article className="App">
      <Provider store={store()}>
        <TodoList />
      </Provider>
    </article>
  );
};

export default App;
