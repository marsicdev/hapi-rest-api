// @ts-check
import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    updated: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: String,
    name: {
        type: String,
        required: true
    }
})

// On save hook, encrypt password
// Before saving a model
userSchema.pre('save', async next => {
    const saltRounds = 10
    try {
        const salt = await bcrypt.genSalt(saltRounds)
        const hash = await bcrypt.hash(this.password, salt)
        this.password = hash
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods.isValidPassword = candidatePassword => {
    return bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model('User', userSchema, 'users')
export default User
