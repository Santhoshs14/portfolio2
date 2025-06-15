const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: [
        "https://santhoshs14.vercel.app",
        "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
})); // Change if needed
app.use(express.json());
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.send('Portfolio backend is running.'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
