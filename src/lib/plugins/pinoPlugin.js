export const configurePinoLogger = async server => {
    await server.register([
        {
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: true,
                logEvents: ['response', 'request']
            }
        }
    ])
}
