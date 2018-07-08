// import { hapiSwaggerPlugin } from './plugins/hapi-swagger-plugin'
import config from 'config'

import { configureErrorHandler } from './lib/middlewares/errorHandler'

import { configurePinoLogger } from './lib/plugins/pinoPlugin'
import { configureJWTAuth } from './lib/plugins/jwtAuthPlugin'

const DEVELOPMENT = 'development'

export const registerPlugins = async server => {
    configureErrorHandler(server)

    await configurePinoLogger(server)
    await configureJWTAuth(server)

    if (config.get('app.env') === DEVELOPMENT) {
        // await hapiSwaggerPlugin(server)
    }
}
