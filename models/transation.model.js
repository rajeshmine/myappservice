const mongoose = require('mongoose');
const transationSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
}, {
    timestamps: true,
    autoIndex: true,
  });

module.exports = mongoose.model('transation', transationSchema);