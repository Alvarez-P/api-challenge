require('dotenv').config()
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.AWS_SECRET_KEY,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
})

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