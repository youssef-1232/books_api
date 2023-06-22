const express = require("express");
const logar = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const booksrouter = require('./router/booksrouter')
const app = express();
const port = 3000;

mongoose.connect("mongodb://0.0.0.0:27017/datas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("concted")
}).catch(() => {
    console.log("err")
})

app.use(logar("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/books', booksrouter)


app.listen(port, () => {
    console.log(`server runing on port ${port}`)
})