module.exports = (app) => {
    const formController = require("../controllers/formController.js")
    var router = require("express").Router();

    router.post("/submit", (req, res) => formController.submit(req,res))
}