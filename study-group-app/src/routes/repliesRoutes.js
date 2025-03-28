const express = require('express');
const RepliesController = require('../controllers/repliesController');

const router = express.Router();
const repliesController = new RepliesController();

function setRepliesRoutes(app) {
    router.post('/posts/:postId/replies', repliesController.createReply.bind(repliesController));
    router.get('/posts/:postId/replies', repliesController.getReplies.bind(repliesController));

    app.use('/api', router);
}

module.exports = setRepliesRoutes;