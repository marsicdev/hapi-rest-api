// @ts-check
import { issueToken } from './../../lib/utils/jwtService'

import { authController } from './authController'

const authRoutes = [
    {
        method: 'POST',
        path: '/api/auth',
        handler: async (req, h) => {
            const user = await authController.exec(req.payload)
            const token = issueToken(user)

            return h.response({
                token,
                user: { id: user.id }
            })
        },
        options: {
            auth: false,
            description: 'Login',
            notes: 'Returns token with user',
            tags: ['api', 'User'],
            validate: {
                payload: authController.validator
            }
        }
    }
]

export default authRoutes
