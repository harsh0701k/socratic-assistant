// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Define the route for arrays
router.get('/arrays', questionController.getArraysQuestions); // Ensure this matches your desired endpoint

module.exports = router;
