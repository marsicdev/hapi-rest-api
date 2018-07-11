// @ts-check
import mongoose, { Schema } from 'mongoose'
import Comment from './Comment'

const Content = new Schema({
    videoUrl: { type: String },
    imageUrl: { type: String, required: true },
    text: { type: String, required: true }
})

const postSchema = new Schema({
    content: Content,
    type: {
        type: String,
        enum: ['video', 'text', 'picture'],
        required: true
    },
    comments: { type: [Comment] }
})

const Post = mongoose.model('Post', postSchema, 'posts')

export default Post
