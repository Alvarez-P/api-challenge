'use strict'
const { HttpError } = require('../utils/HttpError')
const { requestPersonalityInsightsApi } = require('../services/personalityInsightsApi')
const { addProfileAnalyze } = require('../db/profile/addProfile')
const { Profile } = require('../db/profile/class')
const { getProfilesOnDB } = require('../db/profile/getProfiles')

/**
 * Controlador para POST /pi/profile
 * @function newProfileAnalyze
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/
async function newProfileAnalyze(req, res, next) {
  try {
    const text = req.body.content
    const analysis = await requestPersonalityInsightsApi(text)
    // Validar análisis
    if (analysis.status !== 200) throw new HttpError('An error occurred analyzing the text', 500)
    // Guardar en BD
    const profile = new Profile(text, analysis.result)    
    const result = addProfileAnalyze(profile)
    if (result !== 200) throw new HttpError('There was an error saving the information', 500)
    res.status(200).send({ message: 'Success' })
  } catch (error) {
    next(error)
  }
}

/**
 * Controlador para GET /pi/profile
 * @function getProfiles
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/
async function getProfiles(req, res, next) {
  try {
    // Funcion callback para getProfilesOnDB
    function validateResult(err, data) {
      if (err) throw new HttpError('There was an error getting the data', 500)
      res.status(200).send({ message: data.Items })
    }
    getProfilesOnDB(validateResult)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  newProfileAnalyze,
  getProfiles
}