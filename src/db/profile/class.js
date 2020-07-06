const { v4: uuidv4 } = require('uuid')

class Profile {
    constructor(text, analysis){
        this.text = text
        this.analysis = analysis
        this.id = uuidv4()
    }
}

module.exports = { Profile }