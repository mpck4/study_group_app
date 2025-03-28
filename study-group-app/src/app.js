const express = require('express');

console.log('Loading postsRoutes...');
const { setPostsRoutes } = require('./routes/postsRoutes');
console.log('postsRoutes loaded successfully.');

console.log('Loading repliesRoutes...');
const { setRepliesRoutes } = require('./routes/repliesRoutes'); // Import repliesRoutes
console.log('repliesRoutes.js is being loaded');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// Use built-in body parsing middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static('public'));

setPostsRoutes(app); // Add posts routes

console.log('Registering replies routes...');
setRepliesRoutes(app); // Add replies routes
console.log('Replies routes registered successfully.');

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});