import { createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";

export const store = createStore(todoReducer);
store.subscribe(() => {
  console.log(store.getState());
});
