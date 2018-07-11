// @ts-check
import Boom from 'boom'

import { userService } from './UserService'

class UserController {
    async listUsers(req, h) {
        const { sort } = req.query

        const usersList = await userService.listUsers(sort)

        if (usersList === null) {
            return Boom.notFound()
        }

        return usersList
    }

    async singleUser(req, h) {
        const { userId } = req.params

        try {
            const user = await userService.singleUser(userId)
            return user
        } catch (e) {
            return Boom.notFound(e.message)
        }
    }

    async removeUser(req, h) {
        throw Boom.notImplemented()
    }
}

export const userController = new UserController()
