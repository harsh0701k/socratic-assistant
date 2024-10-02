const Question = require('../models/questionModel');

exports.getArrayQuestions = async (req, res) => {
    try {
        const arrayQuestions = await Question.find({ category: 'Array' });
        res.json(arrayQuestions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getObjectsQuestions = async (req, res) => {
    try {
        const objectQuestions = await Question.find({ category: 'Objects' });
        res.json(objectQuestions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
