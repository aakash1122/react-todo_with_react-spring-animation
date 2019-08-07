import React from "react";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { connect } from "react-redux";

const Todos = props => {
  return (
    <div>
      {props.data.todos.length > 0 ? (
        <div>
          {props.data.todos.map(todo =>
            todo.edit ? (
              <EditTodo todo={todo} key={todo.id} />
            ) : (
              <Todo text={todo.text} key={todo.id} id={todo.id} />
            )
          )}
        </div>
      ) : (
        <h3
          className="text-light card bg-danger p-3 mt-5 mx-auto"
          style={{ width: "350px" }}
        >
          No Todo's Left !
        </h3>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Todos);
