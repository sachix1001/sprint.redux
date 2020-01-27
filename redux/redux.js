const redux = require("redux");

// actions

const addTodo = (task) => ({ type: "ADD_TODO", task });

const removeTodo = (task) => {
  return ({ type: "REMOVE_TODO", task })}

// reducer

const reducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return { projects: [...state.projects, action.task] };
    }
    case "REMOVE_TODO": {
      let returnState = [...state.projects];
      returnState = returnState.filter((elem) => {
        return elem.id !== action.task[0].id});
      return { projects: returnState };
    }
  }
  return state;
};

// store
const initialState = { projects: [] };
const store = redux.createStore(reducer, initialState);

module.exports = {
  store,
  addTodo,
  removeTodo,
};
