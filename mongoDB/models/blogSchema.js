import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    category_id: String,
    category: String,
});

export const BlogPosts = mongoose.model('posts', postSchema);