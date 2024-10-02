// routes/socratic.js
const express = require('express');
const router = express.Router();
const { createQuestion } = require('../controllers/socraticController');

// POST route for creating a new question
router.post('/questions', createQuestion);

module.exports = router;
