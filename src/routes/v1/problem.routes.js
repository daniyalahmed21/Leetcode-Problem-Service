const express = require("express")
const {problemController} = require("../../controllers")
const problemRouter = express.Router()

problemRouter.get("/ping",problemController.pingProblemController)
problemRouter.get("/1",problemController.addProblem)


module.exports = { 
    problemRouter
}