const express = require("express")
const {problemController} = require("../../controllers")
const problemRouter = express.Router()

problemRouter.get("/ping",problemController.pingProblemController)
problemRouter.get("/",problemController.addProblem)
problemRouter.get("/all",problemController.getProblems)


module.exports = { 
    problemRouter
}