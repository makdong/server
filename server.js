const http = require('http')
const express = require("express")
const app = express()
const cors = require('cors')
const port = 8000

const db = require("./mdoels")
const Form = db.form

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())
app.use('/static', express.static('public'));

require("./routes/formRoute")(app)
app.listen(port , ()=>{console.log(`express server is running at port nnumber ${port}.`)});