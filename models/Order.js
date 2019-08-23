const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  client: {
    type: Schema.ObjectId,
    ref: 'Clients'
  },
  products: [{
    product: {
      type: Schema.ObjectId,
      ref: 'Products'
    },
    qty: {
      type: Number
    }
  }],
  amount: {
    type: Number
  }
});

module.exports = mongoose.model('Orders', orderSchema);
