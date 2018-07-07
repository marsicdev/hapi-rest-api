import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    _id: String,
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const UserModel = mongoose.model('User', UserSchema, 'users')

export default UserModel
