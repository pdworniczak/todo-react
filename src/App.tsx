import React from "react";
import { Provider } from "react-redux";

import TodoList from "./todo/TodoList";
import store from "./store";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
