const router = require("express").Router();
const builds = require("./builds");
const { store, addTodo, removeTodo, patchTodo } = require("../../../redux/redux");
const ids = require('short-id')

router.get("/", (req, res) => {
  res.status(418).json(store.getState());
});

router.post("/", (req, res) => {
  const project = req.body;
  const id = ids.generate();
  project.id = id;
  const action = addTodo(project);
  store.dispatch(action);

  res.status(200).json(project);
});

router.get("/:projectId", (req, res) => {
  const { projectId } = req.params;
  const result = store.getState().projects.filter(project => project.id === projectId)
  res.status(200).json(result[0]);
});

router.patch("/:projectId", (req, res) => {
  const { projectId } = req.params;
  const project  = req.body;
  const toBePatched = store.getState().projects.filter(project => project.id === projectId);
  project.id = projectId;
  const patchAction = patchTodo(project);
  store.dispatch(patchAction);
  res.status(418).json({ message: "Not Implemented" });
});

router.delete("/:projectId", (req, res) => {
  const { projectId } = req.params;
  const toBeDeleted = store.getState().projects.filter(project => project.id === projectId);
  const deleteAction = removeTodo(toBeDeleted);
  store.dispatch(deleteAction);
  res.status(200).json();
});

router.use("/:projectId/builds", builds);

module.exports = router;
