const express = require('express')

const booksrouter = express.Router()
const book = require('../model/bookmodel')


booksrouter.route('/')
    .get((req, res) => {
        res.send("hello")
    })

module.exports = booksrouter