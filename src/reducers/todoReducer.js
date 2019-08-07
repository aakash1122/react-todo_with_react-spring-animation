let initialState = {
  todos: []
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.id === todo.id) {
            return { ...todo, edit: true };
          } else {
            return todo;
          }
        })
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, edit: false, text: action.text };
          } else {
            return todo;
          }
        })
      };
    case "CANCEL_UPDATE":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.id === todo.id) {
            return { ...todo, edit: false };
          } else {
            return todo;
          }
        })
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    default:
      return state;
  }
}
