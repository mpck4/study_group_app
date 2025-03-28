import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

class SupabaseService {
    async getPosts() {
        const { data, error } = await supabase
            .from('posts')
            .select('*');
        if (error) throw error;
        return data;
    }

    async createPost(post) {
        const { data, error } = await supabase
            .from('posts')
            .insert([post]);
        if (error) throw error;
        return data;
    }

    async getReplies(postId) {
        const { data, error } = await supabase
            .from('replies')
            .select('*')
            .eq('post_id', postId);
        if (error) throw error;
        return data;
    }

    async createReply(reply) {
        const { data, error } = await supabase
            .from('replies')
            .insert([reply]);
        if (error) throw error;
        return data;
    }
}

export default new SupabaseService();