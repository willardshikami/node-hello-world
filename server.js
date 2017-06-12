var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
app.use(express.static('public'));


//Defining resource
Resource = require('./models/resources');


app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());

//connecting to the db
mongoose.connect('mongodb://willard:wssnu9295@ds149431.mlab.com:49431/js_resources');
var db = mongoose.connection;

//checking for connection to the DB
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('We are connected');
});


//displaying the resources
app.get('/api/resources', function (req, res) {
    Resource.getResources(function (err, resources) {
        if(err){
            throw err;
        }
        res.json(resources);
    });
});

//displaying a single resource
app.get('/api/resources/:_id', function(req, res){
    Resource.getResourceById(req.params._id, function(err, resource){
        if(err){
            throw err;
        }
        res.json(resource);
    });
});

//Adding a resource to the DB
app.post('/api/resources', function(req, res){
    var resource = req.body;
    Resource.addResource(resource, function(err, resource){
        if(err){
            throw err;
        }
        res.json(resource)
    });
});


//connecting to the server
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});