const express = require('express');
const PostsController = require('../controllers/postsController');

const router = express.Router();
const postsController = new PostsController();

function setPostsRoutes(app) {
    router.post('/posts', postsController.createPost.bind(postsController));
    router.get('/posts', postsController.getPosts.bind(postsController));

    app.use('/api', router);
}

module.exports = setPostsRoutes;