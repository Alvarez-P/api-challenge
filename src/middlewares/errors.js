/**
 * Middleware para manejo de errores de rutas
 * @function handleErrors 
 * @param {Object} err - error en la peticion
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
*/
const handleErrors = (err, req, res, next) => {
    const { code = 500 } = err 
    const { message = 'An internal server error' } = err 
    res.status(code).send({ message })
}

/**
 * Middleware para manejo de errores 404
 * @function errors404
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const errors404 = (req, res) => {
    res.status(404).send({'message':'Not found'})
}

module.exports = {
    handleErrors,
    errors404
}