import * as pingAction from './pingAction'

const pingRoutes = [
    {
        method: 'GET',
        path: '/ping',
        handler: async (request, h) => {
            const result = await pingAction.exec()
            return h.response(result)
        },
        config: {
            auth: false,
            description: 'Ping the API',
            notes: 'Returns Pong',
            tags: ['api', 'Ping']
        }
    }
]

export default pingRoutes
