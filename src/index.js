import config from 'config'
import logger from './lib/utils/logger'
import * as server from './server'
import mongoose from 'mongoose'

const MongoDBUrl = 'mongodb://mdev:mdev@ds231559.mlab.com:31559/bitbook'

const gracefulStopServer = () => {
    server.stop().then(() => {
        logger.info('Shutting down server')
        process.exit(0)
    })
}

process.on('uncaughtException', err => {
    logger.error(err, 'Uncaught exception')
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
    logger.error(
        {
            promise: promise,
            reason: reason
        },
        'unhandledRejection'
    )
    process.exit(1)
})

process.on('SIGINT', gracefulStopServer)
process.on('SIGTERM', gracefulStopServer)

const startServer = async () => {
    try {
        // add things here before the app starts, like database connection check etc
        const srv = await server.init()
        await srv.start()

        logger.info(
            `server started at port: ${config.get('app.port')} with env: ${config.get('app.env')}`
        )

        // Once started, connect to Mongo through Mongoose
        await mongoose.connect(
            MongoDBUrl,
            {}
        )
        logger.info(`Connected to Mongo server`)
    } catch (error) {
        logger.error(error)
        process.exit(1)
    }
}

startServer()
