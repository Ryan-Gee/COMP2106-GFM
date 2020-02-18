var mongoose = require('mongoose')

//Create a schema for food
var countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    }
})

//Make model public with the name food
module.exports = mongoose.model('Country', countrySchema);