const express = require('express');
const supabase = require('../services/supabaseService');

console.log('Supabase service loaded in postsRoutes.js:', supabase);

const router = express.Router();

// Route to create a new post
router.post('/api/posts', async (req, res) => {
    console.log('Incoming request body:', req.body); // Debugging log
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    try {
        const { data, error } = await supabase
            .from('posts')
            .insert([{ content }]);

        console.log('Supabase insert response:', { data, error }); // Debugging log

        if (error) {
            throw error;
        }

        if (!data || data.length === 0) {
            return res.status(500).json({ error: 'No data returned from Supabase.' });
        }

        res.status(201).json(data[0]);
    } catch (err) {
        console.error('Error during POST /api/posts:', err); // Debugging log
        res.status(500).json({ error: err.message });
    }
});

module.exports = {
    setPostsRoutes: (app) => app.use(router),
};