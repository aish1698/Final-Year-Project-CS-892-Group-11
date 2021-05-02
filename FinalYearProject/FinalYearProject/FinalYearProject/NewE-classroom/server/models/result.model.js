const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
  sem: { type: String, required: true },
  subject: { type: String, required: true },
  dept:  { type: String, required: true },
  name: { type: String, required: true },
  class_roll: { type: String, required: true },
  scores:{type: String, required: true},
});

module.exports = mongoose.model('Result', resultSchema);