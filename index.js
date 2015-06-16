// use the express library
var express = require('express');
// create our app
var app = express();
var path = require("path");
var http = require('http');
// create an http server
server = http.createServer(app);
//listen on the default port, or on 4000 if there's not one
server.listen(process.env.PORT || 4000);

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
 res.render('index')
})