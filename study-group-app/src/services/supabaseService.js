console.log('supabaseService.js is being loaded');
require('dotenv').config(); // Load environment variables from .env
const { createClient } = require('@supabase/supabase-js');

// Load Supabase credentials from environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Debugging logs to verify the values
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey ? 'Key is present' : 'Key is missing');

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or Key is missing. Check your .env file.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('Supabase client initialized successfully.');

module.exports = supabase;