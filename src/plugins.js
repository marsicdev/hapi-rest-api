// import { hapiSwaggerPlugin } from './plugins/hapi-swagger-plugin'
import config from 'config'
import { pinoPlugin } from './lib/plugins/pinoPlugin'
import { errorHandler } from './lib/middlewares/errorHandler'

const DEVELOPMENT = 'development'

export const registerPlugins = async server => {
    errorHandler(server)

    await pinoPlugin(server)

    if (config.get('app.env') === DEVELOPMENT) {
        // await hapiSwaggerPlugin(server)
    }
}
