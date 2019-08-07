import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { useSpring, useTransition, animated } from "react-spring";

const Todo = props => {
  const spr = useSpring({
    transform: "scale(1)",
    from: { transform: "scale(2)" }
  });
  return (
    <animated.div style={spr}>
      <Paper
        className="p-3 m-3 d-flex justify-content-between shadow mx-auto"
        style={{ width: "420px" }}
      >
        <div className="d-flex align-items-center">
          <p>{props.text}</p>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className="m-2"
            onClick={() => {
              props.dispatch({ type: "EDIT_TODO", id: props.id });
            }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className="m-2"
            onClick={() => {
              props.dispatch({ type: "DELETE_TODO", id: props.id });
            }}
          >
            <b>X</b>
          </Button>
        </div>
      </Paper>
    </animated.div>
  );
};

export default connect()(Todo);
