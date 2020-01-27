const redux = require("redux");

// actions

const addTodo = (task) => ({ type: "ADD_TODO", task });

const removeTodo = (task) => ({ type: "REMOVE_TODO", task });

// reducer

const reducer = (state = { projects: [] }, action) => {
  // console.log('wired',action)
  switch (action.type) {
    case "ADD_TODO": {
      // console.log({ projects: [...state.projects, action.task] })
      return { projects: [...state.projects, action.task] };
    }
    case "REMOVE_TODO": {
      let returnState = [...state.projects];
      returnState = returnState.filter((elem) => elem.id !== action.task.id);
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
