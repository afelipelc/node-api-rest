const express = require('express');
const routes = require('./routes');

// create server
const app = express();

// app routes
app.use('/', routes());

// server port
app.listen(5000);

