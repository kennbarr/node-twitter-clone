var path = require('path');
var express = require('express');
var nunjucks = require('nunjucks');

var app = express();
var port = parseInt(process.env.NODE_PORT) || 4000;

app.set('view engine', 'njk');

nunjucks.configure(__dirname + '/views', {
  watch: true,
  express: app
});

app.get('/', function(req, res){
  res.render('homepage');
});

app.listen(port, function(){
  console.log("\x1b[36mTest\x1b[0m\nhttp://localhost:" + port + "\n");
});
