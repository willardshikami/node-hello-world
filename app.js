var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');



//environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

//JSON api
app.get('/api/latest', function(req, res){
    res.json([{
        title: 'Backbone',
        url : 'http://backbonejs.org/'
    },{
        title : 'Angular',
        url : 'https://angularjs.org/'
    },{
        title : 'React',
        url : 'https://facebook.github.io/react/'
    }, {
        title : 'Ember',
        url : 'https://emberjs.com/'
    },{
        title : 'Aurelia',
        url : 'http://aurelia.io/'
    }
    
    ]);
});

app.get('/api/sample', function(req, res){
    res.json([{
        title : 'Bootstrap',
        description : 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        url : 'http://getbootstrap.com/'
    }

    ]);
});


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' +app.get('port'));
});