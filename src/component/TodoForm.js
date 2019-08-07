import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";

class TodoForm extends Component {
  state = {
    text: "",
    error: null
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text !== "") {
      this.setState({
        text: "",
        error: null
      });
      this.props.dispatch(addTodo(this.state.text));
    } else {
      this.setState({
        ...this.state,
        error: "Input field can not be empty"
      });
    }
  };

  render() {
    const error = this.state.error ? (
      <h4 className="text-danger">{this.state.error}</h4>
    ) : null;
    return (
      <>
        {error}
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <TextField
              id="outlined-email-input"
              label="Enter A New Todo"
              type="text"
              name="Todo"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              required={true}
              className="w-75 m-3"
              value={this.state.text}
              onChange={this.onChange}
            />
            <div className="d-flex justify-content-center">
              <Button
                variant="outlined"
                color="primary"
                className="d-block mx-auto"
                onClick={this.onSubmit}
              >
                Add Todo
              </Button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default connect()(TodoForm);
