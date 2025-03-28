class PostsController {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }

    async createPost(req, res) {
        const { title, content } = req.body;
        try {
            const { data, error } = await this.supabaseService.createPost(title, content);
            if (error) throw error;
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPosts(req, res) {
        try {
            const { data, error } = await this.supabaseService.getPosts();
            if (error) throw error;
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = PostsController;