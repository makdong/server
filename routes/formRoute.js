module.exports = (app) => {
    const formController = require("../controllers/formController.js")
    var router = require("express").Router();

    router.get("/:id", formController.get)
    router.get("/response/:id", formController.getResult)
    router.post("/submit", (req, res) => formController.submit(req,res))
    router.post("/response/submit", (req, res) => formController.responseSubmit(req,res))
    app.use('/api', router);
}