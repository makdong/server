module.exports = (app) => {
    const formController = require("../controllers/formController.js")
    var router = require("express").Router();

    router.post("/create", (req, res) => formController.create(req,res))
    router.post("/submit", (req, res) => formController.submit(req,res))
    // router.get("/:id", formController.get);
    // router.get("/result/:id", formController.getResult)
    // app.use('/api/form', router);
}