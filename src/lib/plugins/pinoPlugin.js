export const pinoPlugin = async server => {
    await server.register([
        {
            plugin: require('hapi-pino'),
            options: {
                prettyPrint: true,
                logEvents: ['response']
            }
        }
    ])
}
