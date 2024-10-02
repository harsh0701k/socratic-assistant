const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path to your User model

// POST /api/users/register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if all fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new user instance
        const newUser = new User({ username, email, password });

        // Save the user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error('User registration failed', error);
        res.status(400).json({
            error: "User registration failed",
            details: error
        });
    }
});

module.exports = router;

// User Login
console.log('Register endpoint hit'); // Add this at the start of the POST '/register' route

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Login failed', details: error });
    }
});

module.exports = router;
