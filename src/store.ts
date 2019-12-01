import { createStore } from "redux";

import todoReducer from "./todo/reducer";

export default createStore(todoReducer);
