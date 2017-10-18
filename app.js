var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://localhost/words');
var db = mongoose.connection;

app.get('/',function(req,res){
  res.send('Hello You!!!');
});

app.listen(3000);
console.log('Running on port 3000!');
