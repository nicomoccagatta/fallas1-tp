'use strict';

const express = require('express');
var path = require("path");
const pg = require('pg');
var bodyParser = require('body-parser');
var toobusy = require('toobusy-js');

// Constants
const PORT = 8080;

// App
const app = express();

pg.defaults.ssl = true;

// middleware which blocks requests when we're too busy
app.use(function(req, res, next) {
  if (toobusy()) {
    res.send(500, "I'm busy right now, sorry.");
    console.log("I'm busy right now, sorry.");
  } else {
    next();
  }
});


app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(bodyParser.json());    // parse application/json


app.get('/', function(req, res) { 
    //res.sendFile('index.html');
    res.send("Response");
});


app.use(function(req, res, next){
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.send({code: 0, message: 'Not found'});
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
  next();
});

var server = app.listen(process.env.PORT || PORT);
console.log('Running on http://localhost:' + PORT);

process.on('SIGINT', function() {
  server.close();
  // calling .shutdown allows your process to exit normally
  toobusy.shutdown();
  process.exit();
});
