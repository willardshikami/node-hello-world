var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var http = require('http');
app.use(express.static('public'));


//connecting to the db
MongoClient.connect("mongodb:127.0.0.1:3000/resources", function(err, db){

});


app.set('port', process.env.PORT || 3000);

//JSON api
app.get('/api/resources', function (req, res) {
    res.json([{
            title: "Backbone",
            url: "http://backbonejs.org/"
        }, {
            title: "Angular",
            url: "https://angularjs.org/"
        }, {
            title: "React",
            url: "https://facebook.github.io/react/"
        }, {
            title: "Ember",
            url: "https://emberjs.com/"
        }, {
            title: "Aurelia",
            url: "http://aurelia.io/"
        }, {
            title: "Bootstrap",
            description: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
            url: "http://getbootstrap.com/"
        }

    ]);
});



var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});