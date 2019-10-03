const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');
const productsController = require('../controllers/productsController');
const ordersController = require('../controllers/ordersController');

module.exports = function() {
  // ### Customers ###
  // post: add new client
  router.post('/customers', customersController.add);
  // get: all customers
  router.get('/customers', customersController.list);
  // get: client by :id
  router.get('/customers/:id', customersController.show);
  // put: update client
  router.put('/customers/:id', customersController.update);
  // delete: client
  router.delete('/customers/:id', customersController.delete);

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
  router.put('/products/:id',
    productsController.fileUpload,
    productsController.update
  );
  // delete: product
  router.delete('/products/:id', productsController.delete);

  // find product
  router.post('/products/search/:query', productsController.search);

  // ### Orders ###
  // post: add new order
  router.post('/orders', ordersController.add);
  // get: all orders
  router.get('/orders', ordersController.orders);
  // orders by customer
  router.get('/orders/:customer', ordersController.by_customer);
  // get: product by :id
  router.get('/orders/:id', ordersController.show);
  // put: update product
  router.put('/orders/:id', ordersController.update);
  // delete: product
  router.delete('/orders/:id', ordersController.delete);

  return router;
}
