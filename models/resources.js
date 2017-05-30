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
var Resource = module.exports = mongoose.model('resource', resourceSchema);

//function to get resources
module.exports.getResources = function(callback, limit){
    Resource.find(callback).limit(limit);
}

//function to get a single resource
module.exports.getResourceById = function(id, callback){
    Resource.findById(id, callback);
}  

//function to add resource to DB
module.exports.addResource = function(resource, callback){
    Resource.create(resource, callback);
}
