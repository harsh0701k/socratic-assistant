const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    category: String,
    question: String,
    answer: String,
});

module.exports = mongoose.model('Question', questionSchema);
