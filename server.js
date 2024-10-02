const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
const mongoUri = 'mongodb://localhost:27017/gen_ai_assistant'; // Make sure this is defined
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');

    // Start the server only after the database connection is established
    app.listen(5000, () => {
        console.log('Server running on port 5000');
    });
})
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Define your Question model
const QuestionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    answer: { type: String, required: true },
    category: { type: String, required: true },
});
const Question = mongoose.model('Question', QuestionSchema);

// Step 2a: Create a GET Endpoint
app.get('/api/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching questions', error });
    }
});

// Step 2b: Create an Update Endpoint
app.put('/api/questions/:id', async (req, res) => {
    try {
        const { questionText, answer, category } = req.body;
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, {
            questionText,
            answer,
            category
        }, { new: true });

        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.json(updatedQuestion);
    } catch (error) {
        res.status(400).json({ message: 'Error updating question', error });
    }
});

// Step 2c: Create a Delete Endpoint
app.delete('/api/questions/:id', async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }

        res.json({ message: 'Question deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting question', error });
    }
});
