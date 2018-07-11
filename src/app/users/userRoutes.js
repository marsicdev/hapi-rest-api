// @ts-check
import { API_PATH } from './../../shared/constants'
import { userValidations } from './userValidations'
import { userController } from './UserController'

const routes = []

// GET /users
routes.push({
    path: API_PATH + '/users',
    method: 'GET',
    handler: userController.listUsers,
    options: {
        tags: ['api'],
        validate: userValidations.listUsers
    }
})

// GET /user/:userId
routes.push({
    path: API_PATH + '/users/{userId}',
    method: 'GET',
    handler: userController.singleUser,
    options: {
        tags: ['api'],
        validate: userValidations.user
    }
})

// POST /users
routes.push({
    path: API_PATH + '/users',
    method: 'POST',
    handler: userController.listUsers,
    options: {
        tags: ['api', 'user'],
        description: 'Create new user',
        validate: userValidations.createUser
    }
})

// DELETE /users
routes.push({
    path: API_PATH + '/users/{userId}',
    method: 'DELETE',
    handler: userController.removeUser
})

export default routes
