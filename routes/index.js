const express = require('express');

const router = express.Router();

module.exports = function() {
  router.get('/', (req, res) => {
    res.send('inicio');
  });

  router.get('/about', (req, res) => {
    res.send('nosotros');
  });

  return router;
}