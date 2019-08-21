const express = require('express');

const router = express.Router();

const clientsController = require('../controllers/clientsController');
const productsController = require('../controllers/productsController');

module.exports = function() {
  // ### Clients ###
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

  // ### Products ###
  // post: add new product
  router.post('/products', 
    productsController.fileUpload,
    productsController.add
  );
  // get: all products
  router.get('/products', productsController.products);
  // get: product by :id
  router.get('/products/:id', productsController.show);
  // put: update product
  router.put('/products/:id', productsController.update);
  // delete: product
  router.delete('/products/:id', productsController.delete);
  return router;
}