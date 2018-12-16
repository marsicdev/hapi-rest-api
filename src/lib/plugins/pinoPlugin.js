export const configurePinoLogger = async server => {
    await server.register([
        {
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: process.env.NODE_ENV !== 'production',
                logEvents: ['response', 'request', 'onPostStart', 'onPostStop', 'request-error']
            }
        }
    ])
}
