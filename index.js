const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// conect mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi', {
  useNewUrlParser: true
})

// create server
const app = express();

// eneable bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app routes
app.use('/', routes());

// server port
app.listen(5000);

