const express = require('express');
const supabase = require('../services/supabaseService');

const router = express.Router();

// Route to create a new reply
router.post('/api/replies', async (req, res) => {
    console.log('Incoming request to /api/replies');
    const { content, post_id } = req.body;

    if (!content || !post_id) {
        console.log('Invalid request body:', req.body);
        return res.status(400).json({ error: 'Content and post_id are required' });
    }

    try {
        const { data, error } = await supabase
            .from('replies')
            .insert([{ content, post_id }]);

        console.log('Supabase insert response:', { data, error }); // Debugging log

        if (error) {
            throw error;
        }

        if (!data || data.length === 0) {
            return res.status(500).json({ error: 'No data returned from Supabase.' });
        }

        res.status(201).json(data[0]);
    } catch (err) {
        console.error('Error during POST /api/replies:', err); // Debugging log
        res.status(500).json({ error: err.message });
    }
});

module.exports = {
    setRepliesRoutes: (app) => {
        console.log('setRepliesRoutes is being called'); // Debugging log
        app.use(express.static('public')); // Adjust the path if necessary
        app.use(router);
    },
};