const AWS = require("aws-sdk")

/**
 * Funcion para guardar un Profile en DynamoDB
 * @function addProfileAnalyze
 * @param {Object} profile - Profile object
 * @return {number} Codigo HTTP de la respuesta al guardar en la BD
*/
const addProfileAnalyze = (profile) => {
    AWS.config.update({
        region: "eu-west-2",
        endpoint: "http://localhost:8000"
    })

    const docClient = new AWS.DynamoDB.DocumentClient()
    const params = {
        TableName: "Analysis",
        Item: {
            "id": profile.id,
            "text": profile.text,
            "analysis": profile.analysis
        }
    }
    const result = docClient.put(params) 
    return result.response.error ? 500 : 200
}
module.exports = {
    addProfileAnalyze
}