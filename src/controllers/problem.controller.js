const { StatusCodes } = require("http-status-codes");
const { NotImplemented } = require("../errors/NotImplemented.error");

function getProblem() {}

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function getProblems(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

function addProblem(req, res,next) {
  try {
    //nothing
    throw new NotImplemented("addProblem");

  } catch (error) {
    next(error);

  }
}

function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

module.exports = {
  getProblem,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
