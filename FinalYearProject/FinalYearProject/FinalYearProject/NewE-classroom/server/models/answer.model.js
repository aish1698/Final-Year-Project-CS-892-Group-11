const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
  sem: { type: String, required: true },
  subject: { type: String, required: true },
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('answers', answerSchema);