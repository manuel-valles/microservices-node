const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    default: 'book',
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model('Book', BookSchema);
