// @ts-check
import pingRoutes from './app/ping/pingRoutes'
import userRoutes from './app/users/userRoutes'
import authRoutes from './app/auth/authRoutes'

// prettier-ignore
export default [
    ...pingRoutes,
    ...userRoutes,
    ...authRoutes
]
