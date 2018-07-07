import Boom from 'boom'

import { userService } from './UserService'

class UserController {
    async listUsers(req, h) {
        const { sort } = req.query

        try {
            const usersList = await userService.listUsers(sort)
            return h.response(usersList).code(200)
        } catch (e) {
            return Boom.notFound(e.message)
        }
    }

    async singleUser(req, h) {
        const { userId } = req.params

        try {
            const user = await userService.singleUser(userId)
            return h.response(user)
        } catch (e) {
            return Boom.notFound(e.message)
        }
    }

    async removeUser(req, h) {
        throw Boom.notImplemented()
    }
}

export const userController = new UserController()
