const { StatusCodes } = require("http-status-codes");
const { NotImplemented } = require("../errors/NotImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository()); 

 function getProblem(req, res, next) {
  try {
    throw new NotImplemented("getProblem");
  } catch (error) {
    next(error);
  }
}

function pingProblemController(req, res, next) {
  return res.json({ message: "Problem controller is up" });
}

async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getAllProblems()
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched problems",
      error: [],
      data: problems,
    })
    
  } catch (error) {
    next(error);
  }
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    console.log("hello")
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created problem",
      error: [],
      data: newProblem,
    });
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
