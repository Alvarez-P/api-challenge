const { HttpError } = require('../utils/HttpError')

/**
 * Middleware para validacion de longitud del texto
 * @function validateContent 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/
const validateContent = (req, res, next) => {
    try {
        const words = req.body.content ? req.body.content.split(" ") : 0
        if (words.length < 100) throw new HttpError("Content must be greater than 99 words", 400)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    validateContent
}