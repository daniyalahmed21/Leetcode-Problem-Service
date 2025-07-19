const express = require("express")
const {problemController} = require("../../controllers")
const problemRouter = express.Router()

problemRouter.get("/ping",problemController.pingProblemController)
problemRouter.post("/",problemController.addProblem)
problemRouter.get("/",problemController.getProblems)
problemRouter.get("/:id",problemController.getProblem)


module.exports = { 
    problemRouter
}