const AWS = require("../config")

const docClient = new AWS.DynamoDB.DocumentClient();

/**
 * Funcion para obtener obtener registros de DynamoDB
 * @function getProfilesOnDB
 * @param {Function} validateResult - Funcion para validar el resultado de la consulta
*/
const getProfilesOnDB = (validateResult) => {
    const params = {
        TableName: "Profile",
        ProjectionExpression: "#id, #text, #analysis",
        ExpressionAttributeNames: {
            "#id": "id",
            "#text": "text",
            "#analysis": "analysis"
        }
    }
    docClient.scan(params, validateResult)
}

module.exports = {
    getProfilesOnDB
}