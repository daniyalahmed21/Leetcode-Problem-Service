const express = require("express")
const {problemController} = require("../../controllers")
const problemRouter = express.Router()

problemRouter.get("/ping",problemController.pingProblemController)

module.exports = { 
    problemRouter
}