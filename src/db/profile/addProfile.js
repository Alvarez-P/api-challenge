const AWS = require("../config")

/**
 * Funcion para guardar un Profile en DynamoDB
 * @function addProfileAnalyze
 * @param {Object} profile - Profile object
 * @param {Function} validateResult - Funcion para validar el resultado de la consulta
 * @return {number} Codigo HTTP de la respuesta al guardar en la BD
*/
const addProfileAnalyze = (profile, validateResult) => {
    const docClient = new AWS.DynamoDB.DocumentClient()
    const params = {
        TableName: "Profile",
        Item: {
            "id": profile.id,
            "text": profile.text,
            "analysis": profile.analysis
        }
    }
    docClient.put(params, validateResult)
}
module.exports = {
    addProfileAnalyze
}