const mongoose = require('mongoose');

const ansSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: [true, 'Please answer the question!']
  }
}
);

const Answer = mongoose.model('Answer', ansSchema);

module.exports = Answer;