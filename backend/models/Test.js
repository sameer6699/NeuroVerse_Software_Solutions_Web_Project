const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    default: 'Database Initialized',
  },
});

module.exports = mongoose.model('Test', TestSchema);
