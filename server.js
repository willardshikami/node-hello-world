var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
app.use(express.static('public'));



app.set('port', process.env.PORT || 3000);


//connecting to the db
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds149431.mlab.com:49431/js_resources');
var db = mongoose.connection;

//checking for connection to the DB
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('We are connected');
});

//Defining the Schema
var resourceSchema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    url:{
        type : String,
        required: true
    },
})

var resource = mongoose.model('resource', resourceSchema);


var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});