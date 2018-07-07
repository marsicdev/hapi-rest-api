import mongoose, { Schema } from 'mongoose'

const Content = new Schema({
    videoUrl: {
        type: String
    },
    imageUrl: { type: String, required: true },
    text: { type: String, required: true }
})

const PostSchema = new Schema({
    content: Content,
    type: {
        type: String,
        enum: ['video', 'detail'],
        required: true
    },
    comments: { type: Array }
})

const User = mongoose.model('Post', PostSchema, 'posts')

export default User
