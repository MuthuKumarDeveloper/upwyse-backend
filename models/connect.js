// models/connect.js

const mongoose = require('mongoose');

const connectSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  serviceNeeded: String,
  message: String,
});

const Connect = mongoose.model('Connect', connectSchema);

module.exports = Connect;
