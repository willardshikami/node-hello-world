var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining the Schema
var resourceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
})

//defining the model and making it accessible 
var Resource =module.exports = mongoose.model('resource', resourceSchema);

//function to get resource
module.exports.getResources = function(callback, limit){
    Resource.find(callback).limit(limit);
}
