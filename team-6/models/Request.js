const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  query: {
    type: String,
    required: true,
  },
  reply: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Request = mongoose.model('request', RequestSchema);
