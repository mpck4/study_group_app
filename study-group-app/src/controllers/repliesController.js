class RepliesController {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }

    async createReply(req, res) {
        const { postId, content } = req.body;
        try {
            const { data, error } = await this.supabaseService.addReply(postId, content);
            if (error) throw error;
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getReplies(req, res) {
        const { postId } = req.params;
        try {
            const { data, error } = await this.supabaseService.getReplies(postId);
            if (error) throw error;
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = RepliesController;