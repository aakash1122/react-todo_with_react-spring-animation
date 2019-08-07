import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./component/TodoForm";
import Todos from "./component/Todos";
import { store } from "./store";
import { Provider } from "react-redux";
import { useSpring, animated } from "react-spring";
import "./styles.css";

function App() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props} className="App container">
      <h1 className="mt-3 mb-5">Todo-App</h1>
      <div className="mt-3">
        <TodoForm />
        <Todos />
      </div>
    </animated.div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
