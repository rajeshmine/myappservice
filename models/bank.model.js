const mongoose = require('mongoose');
const bankSchema = new mongoose.Schema({
  mobileNo: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true
  }
}, {
    timestamps: true, 
  });

module.exports = mongoose.model('banks', bankSchema);