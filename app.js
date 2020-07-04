'use strict'
require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./src/routes')
const { handleErrors, errors404 } = require('./src/middlewares/errors')

const { PORT = 5000 } = process.env
// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
// Routes
app.use('/pi', api)
app.use(handleErrors)
app.all('*', errors404)
// Start server
app.listen(PORT, () => {
    console.log(`API REST running on http://localhost:${PORT}`)
})
