import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { useSpring, animated } from "react-spring";
const EditTodo = props => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  // spring animation
  const spr = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <animated.div style={spr}>
      {error ? <h4 className="d-block text-damger mt-3">{error}</h4> : null}
      <Paper className="p-3 m-3 d-flex justify-content-around">
        <div className="container">
          <TextField
            id="outlined-email-input"
            label="Update with a new Todo"
            type="text"
            name="Todo"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            className="w-75 m-3"
            required={true}
            defaultValue={props.todo.text}
            onChange={e => {
              setText(e.target.value);
            }}
          />
          <div className="d-flex justify-content-center">
            <Button
              variant="text"
              color="primary"
              className="m-3"
              onClick={() => {
                if (text !== "") {
                  props.dispatch({
                    type: "UPDATE_TODO",
                    text,
                    id: props.todo.id
                  });
                } else {
                  setError("Input field can not be empty");
                }
              }}
            >
              Update
            </Button>
            <Button
              variant="text"
              color="secondary"
              className="m-3"
              onClick={() => {
                props.dispatch({ type: "CANCEL_UPDATE", id: props.todo.id });
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Paper>
    </animated.div>
  );
};

export default connect()(EditTodo);
