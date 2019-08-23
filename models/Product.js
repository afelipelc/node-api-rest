const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('Products', productSchema);
