// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
    // You can add more fields if necessary
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
