function getProblem() {}

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function getProblems() {}

function addProblem() {}

function deleteProblem() {}

function updateProblem() {}

module.exports = {
  getProblem,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
