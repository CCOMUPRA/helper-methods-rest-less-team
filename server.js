// Server-side Node.js code using Express and the native MongoDB driver

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection string
const mongoURI = 'your-mongodb-connection-string';
let db;

// Connect to MongoDB
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');
    db = client.db('your-database-name');

    // Start the server after connecting to MongoDB
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

// API endpoint to check session validity
app.get('/api/checkSession', async (req, res) => {
    try {
        // Replace this with your actual session validation logic
        // For example, validate a session token or check user authentication status
        const isValid = /* your validation logic here */ true;

        res.json({ isValid });
    } catch (error) {
        console.error('Error checking session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
