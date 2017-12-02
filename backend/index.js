var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
//add middlewares
app.use(cors());
app.use(bodyParser.json());

const route = require('./route/route');
app.use('/api',route);

const PORT = 3000;

//database connection
mongoose.connect('mongodb://localhost:27017/shopping/backend');

//check database connection
mongoose.connection.on('connected', function(){
  console.log("connected to database");
});
mongoose.connection.on('error',function(err){
  console.log(err);
});

//testing server
app.listen(PORT, function(){
  console.log('server is running at port '+ PORT);
});
