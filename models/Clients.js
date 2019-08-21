const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  business: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Clients', clientsSchema);
