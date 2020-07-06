'use strict'

const express = require('express')
const { newProfileAnalyze, getProfiles } = require('../controllers/profile')
const { validateContent } = require('../middlewares/validate')
const api = express.Router()

api.post('/profile', validateContent, newProfileAnalyze)
api.get('/profile', getProfiles)

module.exports = api