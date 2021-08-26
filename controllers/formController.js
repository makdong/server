const db = require('../models')
const Form = db.form
const Question = db.question
const Option = db.option
const { forEach } = require('p-iteration')
const { v4: uuidv4 } = require('uuid')
const form = require('../models/form')

exports.get = async (req, res) => {

    const form = await Form.findOne({
        where: {formId : "df140bbe-0d62-4781-a496-13c653d13dea"}
    })
    res.json({
        success : true,
        form : Form,
        question : Question,
        option : Option
    })

    console.log(form)
    // const question = await form.findOne({
    //     include: form
    // })
    const question = await Question.findOne({
        formId :  "df140bbe-0d62-4781-a496-13c653d13dea"
    })
    console.log(question)
    // const tempQ = await question.findOne({
    //     where: {questionID : 0}
    // })
    // console.log(tempQ.title)
    // console.log(form.Question.Option)
}

exports.getResult = async (req, res) => {

}

exports.submit = async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const questions = req.body.questions
    const uuid = uuidv4();

    const resultForm = await Form.create({
        title: title,
        description: description,
        formId: uuid
    })
    await forEach(questions, async(question, index) => {
        const result = await Question.create({
            questionID: question.questionID,
            questionType: question.questionType,
            optionTitle: question.optionTitle
        })
        // console.log(result)

        const option = question.options
        await forEach(option, async(option, index) => {
            const resultOption = await Option.create({
                optionID : option.optionID,
                optionText : option.optionText
            })
            // console.log(resultOption)
        })
    })

    
    // console.log(resultForm)
    console.log(uuid)

    res.json({success: true})
}

exports.responseSubmit = async (req, res) => {

}
    // router.get("/:id", formController.get)
    // router.get("/result/:id", formController.getResult)
    // router.post("/submit", (req, res) => formController.submit(req,res))
    // router.post("/response/submit", (req, res) => formController.responseSubmit(req,res))