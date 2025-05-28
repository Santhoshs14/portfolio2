// backend/server.js
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Change if needed
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.send('Portfolio backend is running.'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
