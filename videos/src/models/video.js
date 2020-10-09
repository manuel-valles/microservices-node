const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String,
    default: 'video',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', VideoSchema);
