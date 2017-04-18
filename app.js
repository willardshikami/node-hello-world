var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');



//environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('public', __dirname +'/public');
app.use(express.static(path.join(__dirname, 'public')));


app.post('/user', function(req, res){
    res.send('Submitted users name '+ req.body.name);
});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' +app.get('port'));
});