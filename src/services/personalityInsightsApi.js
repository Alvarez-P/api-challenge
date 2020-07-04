require('dotenv').config()
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

/**
 * Request a la API PersonalityInsights con el texto a analizar
 * @function requestPersonalityInsightsApi
 * @param {string} text 
 * @return {Promise} Objeto con la respuesta de la API PersonalityInsights
 */
const requestPersonalityInsightsApi = (text) => {
    const personalityInsights = new PersonalityInsightsV3({
        version: '2017-10-13',
        authenticator: new IamAuthenticator({
            apikey: process.env.APIKEY,
        }),
        url: process.env.URL_IBM,
        disableSslVerification: true,
    });

    const profileParams = {
        content: text,
        contentType: 'text/plain',
        consumptionPreferences: true,
        rawScores: true,
    };
    
    return personalityInsights.profile(profileParams)
        .then(profile => profile)
        .catch(err => err)    
}

module.exports = {
    requestPersonalityInsightsApi
}