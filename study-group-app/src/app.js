const express = require('express');
const bodyParser = require('body-parser');
const { setPostsRoutes } = require('./routes/postsRoutes');
const { setRepliesRoutes } = require('./routes/repliesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

setPostsRoutes(app);
setRepliesRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});