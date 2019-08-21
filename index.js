const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

// conect mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi', {
  useNewUrlParser: true
})

// create server
const app = express();

// app routes
app.use('/', routes());

// server port
app.listen(5000);

