const express = require("express")
const {ProblemController} = require("../../controllers")
const problemRouter = express.Router()

problemRouter.get("/ping",ProblemController.pingProblemController)

module.exports = { 
    problemRouter
}