import { getWeatherByCityName } from './weatherHandler'
import { weatherValidations } from './weatherValidations'

const API_PATH = '/api'

const routes = []

// GET /weather
routes.push({
    path: API_PATH + '/weather',
    method: 'GET',
    handler: getWeatherByCityName,
    config: {
        tags: ['api'],
        validate: weatherValidations.weather
    }
})

export default routes
