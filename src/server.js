import config from 'config'
import routes from './routes'
import { Server } from 'hapi'
import { registerPlugins } from './plugins'

const port = config.get('app.port')
const connection = {
    port: parseInt(port),
    routes: {
        cors: true
    }
}

const server = new Server(connection)

const init = async () => {
    await registerPlugins(server)
    server.route(routes)

    return server
}

const stop = () => {
    // Wait 10 secs for existing connection to close and then exit.
    return server.stop({ timeout: 10 * 1000 })
}

export { init, stop }
