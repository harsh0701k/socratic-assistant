const mongoose = require('mongoose');

// Your MongoDB connection string
const mongoUri = 'your-mongodb-connection-string';

// Connect to MongoDB (no need to specify useNewUrlParser and useUnifiedTopology)
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });


// Seed questions into the database
const seedQuestions = async () => {
    const questions = [
        { category: 'Array', question: 'What is an array?', answer: 'An array is a collection of items stored at contiguous memory locations.' },
        { category: 'Array', question: 'How do you declare an array in JavaScript?', answer: 'You can declare an array using the syntax: let arr = [];' },
        { category: 'Objects', question: 'What is an object in JavaScript?', answer: 'An object is a standalone entity, with properties and type.' },
        { category: 'Objects', question: 'How do you create an object in JavaScript?', answer: 'You can create an object using object literals: let obj = {}; or by using the new keyword: let obj = new Object();' }
    ];

    try {
        await Question.insertMany(questions); // Insert the questions into the database
        console.log('Database seeded with questions!');
    } catch (error) {
        console.error('Error seeding the database', error);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};
