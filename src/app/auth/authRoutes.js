// @ts-check
import { authController } from './authController'

const authRoutes = [
    {
        method: 'POST',
        path: '/api/auth',
        handler: authController.login,
        options: {
            auth: false,
            description: 'Login',
            notes: 'Returns token with user',
            tags: ['api', 'User'],
            validate: {
                payload: authController.validator
            }
        }
    },
    {
        method: 'POST',
        path: '/api/register',
        handler: authController.register,
        options: {
            auth: false,
            description: 'Register',
            notes: 'Register new user',
            tags: ['api', 'User'],
            validate: {
                payload: authController.validator
            }
        }
    }
]

export default authRoutes
