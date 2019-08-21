const express = require('express');

const router = express.Router();

const clientsController = require('../controllers/clientsController');

module.exports = function() {
  // post: add new client
  router.post('/clients', clientsController.addClient);
  // get: all clients
  router.get('/clients', clientsController.clients);
  // get: client by :id
  router.get('/clients/:id', clientsController.show);
  // put: update client
  router.put('/clients/:id', clientsController.update);
  // delete: client
  router.delete('/clients/:id', clientsController.delete);
  return router;
}