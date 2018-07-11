// @ts-check
import User from './../../models/User'
import { RecordNotFoundError, ApplicationError } from './../../lib/errors'

class UserService {
    async listUsers(sort) {
        const users = await User.find({}).exec()

        users.sort((a, b) => {
            if (a[sort] < b[sort]) return -1
            if (a[sort] > b[sort]) return 1
            return 0
        })

        return users
    }

    async singleUser(userId) {
        const user = await User.findById(userId).exec()

        if (!user) {
            throw new RecordNotFoundError('Record not found')
        }

        return user
    }

    async createUser(data) {
        const { username, name, age } = data
        const userData = new User({ username, name, age })

        const user = await User.create(userData)
        if (!user) {
            throw new ApplicationError('Unable to create user')
        }

        return user
    }
}

export const userService = new UserService()
