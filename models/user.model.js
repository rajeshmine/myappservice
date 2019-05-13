const mongoose = require('mongoose');
const signUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', signUpSchema);