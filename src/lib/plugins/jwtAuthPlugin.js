// @ts-check
import HapiAuthJwt2 from 'hapi-auth-jwt2'
import { authHandler } from '../middlewares/authHandler'

export const configureJWTAuth = async server => {
    await server.register(HapiAuthJwt2)

    server.auth.strategy('jwt', 'jwt', {
        key: 'NeverShareYourSecret',
        validate: authHandler,
        verifyOptions: { algorithms: ['HS256'] }
    })

    // server.auth.default('jwt')
    server.auth.default({
        mode: 'required',
        strategy: 'jwt'
    })
}
