'use strict'

const express = require('express')
const { analyzeProfile } = require('../controllers/profile')
const { validateContent } = require('../middlewares/validate')
const api = express.Router()

api.post('/profile', validateContent, analyzeProfile)

module.exports = api