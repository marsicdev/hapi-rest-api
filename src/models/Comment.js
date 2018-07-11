// @ts-check
import mongoose, { Schema } from 'mongoose'

const commentSchema = new Schema({
    videoUrl: {
        type: String
    },
    imageUrl: { type: String, required: true },
    text: { type: String, required: true }
})

const Comment = mongoose.model('Comment', commentSchema, 'comments')

export default Comment
