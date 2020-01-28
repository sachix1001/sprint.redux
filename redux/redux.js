const redux = require("redux");

// actions

const addTodo = (task) => ({ type: "ADD_TODO", task });
const removeTodo = (task) => ({ type: "REMOVE_TODO", task });
const patchTodo = (task) => ({ type: "PATCH_TODO", task });
const addBuild = (task) => ({ type: "ADD_BUILD", task });
// reducer

const reducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      action.task.builds = [];
      return { projects: [...state.projects, action.task] };
    }
    case "REMOVE_TODO": {
      let returnState = [...state.projects];
      returnState = returnState.filter((elem) => {
        return elem.id !== action.task[0].id;
      });
      return { projects: returnState };
    }
    case "PATCH_TODO": {
      let patchBody = action.task;
      let returnState = [...state.projects];
      returnState = returnState.map((project) => {
        if (project.id === patchBody.id) {
          for (let key in patchBody) {
            project[key] = patchBody[key];
          }
        }
        return project;
      });
    }
    case "ADD_BUILD": {
      const projectId = action.task.id;
      const { buildNumber, status, output } = action.task;
      const projects = store.getState().projects.map((project) => {
        if (project.id === projectId) {
          project.builds.push({ buildNumber, status, output });
        }
      });
      return projects;
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
  patchTodo,
  addBuild
};
