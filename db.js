const mongoose = require('mongoose');

// Your MongoDB URI
const mongoUri = 'mongodb://localhost:27017/gen_ai_assistant';

const connectDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoUri);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;
