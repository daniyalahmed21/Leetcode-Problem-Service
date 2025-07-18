const { StatusCodes } = require("http-status-codes");
const { NotImplemented } = require("../errors/NotImplemented.error");

function getProblem(req, res, next) {
  try {
    //nothing
    throw new NotImplemented("getProblem");
  } catch (error) {
    next(error);
  }
}

function pingProblemController(req, res, next) {
  return res.json({ message: "Problem controller is up" });
}

function getProblems(req, res, next) {
  try {
    //nothing
    throw new NotImplemented("getProblems");
  } catch (error) {
    next(error);
  }
}

function addProblem(req, res, next) {
  try {
    //nothing
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    //nothing
    throw new NotImplemented("deleteProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    //nothing
    throw new NotImplemented("updateProblem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProblem,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
