require('dotenv').config()
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.AWS_SECRET_KEY,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
})

module.exports = AWS