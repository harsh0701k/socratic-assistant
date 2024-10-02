// controllers/socraticController.js
const Question = require('../models/Question'); // Ensure you have the correct path

// Create a new question
const createQuestion = async (req, res) => {
    const { questionText, answer, category } = req.body; // Make sure these keys match your incoming JSON structure

    try {
        const newQuestion = new Question({ questionText, answer, category });
        await newQuestion.save();
        res.status(201).json({ message: 'Question created successfully!', question: newQuestion });
    } catch (error) {
        res.status(400).json({ message: 'Error creating question', error });
    }
};

module.exports = {
    createQuestion,
    // other exports
};
