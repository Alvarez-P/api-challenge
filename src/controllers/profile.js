'use strict'
const { HttpError } = require('../utils/HttpError')
const { requestPersonalityInsightsApi } = require('../services/personalityInsightsApi')

/**
 * Controlador para /profile
 * @function analyzeProfile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/
async function analyzeProfile(req, res, next) {
  try {
    const analysis = await requestPersonalityInsightsApi(req.body.content)
    // Validar resultado
    if (analysis.status === 200) res.status(200).send({ status: "Success" })
    else throw new HttpError()
  } catch (error) {
    next(error)
  }
}

module.exports = {
    analyzeProfile
}