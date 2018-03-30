import bunyan from 'bunyan'
import config from 'config'

// create a logger instance
export default bunyan.createLogger({
    name: config.get('app.name'),
    level: config.get('app.logLevel'),
    serializers: bunyan.stdSerializers
})
