// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
        return res.status(400).json({ error: 'All fields required.' });

    try {
        const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
        await pool.execute(sql, [name, email, message]);
        res.json({ success: true });
    } catch (err) {
        console.error('Error saving contact message:', err.message);
        res.status(500).json({ error: 'Database error' });
    }
});
// Get all messages (for development/admin)
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});


module.exports = router;
