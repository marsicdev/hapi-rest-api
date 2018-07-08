import * as pingAction from './pingAction'

export const pingRoutes = []

pingRoutes.push({
    method: 'GET',
    path: '/ping',
    handler: async (_, h) => {
        const result = await pingAction.exec()
        return h.response(result)
    },
    options: {
        auth: false,
        description: 'Ping the API',
        notes: 'Returns Pong',
        tags: ['api', 'Ping']
    }
})

pingRoutes.push({
    method: 'POST',
    path: '/ping',
    handler: async (_, h) => {
        const result = await pingAction.exec()
        return h.response(result)
    },
    options: {
        description: 'Ping the API with jwt Auth',
        notes: 'Returns protected Pong',
        tags: ['api', 'Ping']
    }
})

export default pingRoutes
