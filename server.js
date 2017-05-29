var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
app.use(express.static('public'));



app.set('port', process.env.PORT || 3000);


//connecting to the db
mongoose.connect('');
var db = mongoose.connection;

//checking for connection to the DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('We are connected');
});

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

//defining the model
var resource = mongoose.model('resource', resourceSchema);

//displaying the resources
app.get('/api/resources', function (req, res) {
    resource.find().exec(function (err, resources) {
        res.json(resources);
    });
});

//connecting to the server
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});