// @ts-check
import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    updated: { type: Date, default: Date.now },
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: String,
    name: {
        required: true,
        type: String
    },
    age: {
        type: { type: Date, default: 0 }
    }
})

const UserModel = mongoose.model('User', UserSchema, 'users')

export default UserModel
