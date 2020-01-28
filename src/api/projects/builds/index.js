const router = require("express").Router();
// const builds = require("./builds");
const { store, addTodo, removeTodo, patchTodo ,addBuild} = require("../../../../redux/redux");
const ids = require('short-id')

router.get("/", (req, res) => {
  const { projectId } = req.params;
  const result = store.getState().filter((project) => project.id === projectId)
    .builds;

  res.status(200).json(result);
});

router.post("/", (req, res) => {
  const { projectId } = req.params;
  // TODO Trigger a new build for a project. Return immediately with status 200 (don't wait for build to finish).

  res.status(418).json({ message: "Not Implemented" });
});

router.get("/latest", (req, res) => {
  const { projectId } = req.params;
  // TODO Retrieve the latest build of a project
  res.status(418).json({ message: "Not Implemented" });
});

router.get("/:buildId", (req, res) => {
  const { projectId, buildId } = req.params;
  // TODO Retrieve a single build from a project
  res.status(418).json({ message: "Not Implemented" });
});

module.exports = router;
