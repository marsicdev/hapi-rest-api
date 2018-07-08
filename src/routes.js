import pingRoutes from './ping/pingRoutes'
import userRoutes from './users/userRoutes'
import authRoutes from './auth/authRoutes'

// prettier-ignore
export default [
    ...pingRoutes,
    ...userRoutes,
    ...authRoutes
]
