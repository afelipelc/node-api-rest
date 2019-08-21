const express = require('express');

const router = express.Router();

const clientsController = require('../controllers/clientsController');

module.exports = function() {
  // post: add new client
  router.post('/clients', clientsController.addClient);
  router.get('/clients', clientsController.clients);

  return router;
}