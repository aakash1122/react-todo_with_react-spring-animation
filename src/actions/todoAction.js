export const addTodo = text => {
  return {
    type: "ADD_TODO",
    payload: { id: Math.random(), text: text }
  };
};
export const removeTodo = id => {
  return {
    type: "ADD_TODO",
    id
  };
};
