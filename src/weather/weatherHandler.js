import { boomify } from 'boom'
import { httpStatus } from 'http-status'

import { getWeatherByCity } from './weatherCtrl'
import logger from './../lib/utils/logger'

const getWeatherByCityName = async (req, h) => {
    const cityName = req.query.cityName

    try {
        const data = await getWeatherByCity(cityName)
        return h.response({
            name: data.name,
            coord: data.coord,
            weather: data.weather
        })
    } catch (error) {
        const errorMessage = `Failed to fetch weather for ${cityName}`
        !error.logged && logger.error(error, errorMessage)

        return boomify(error, {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: errorMessage
        })
    }
}

export { getWeatherByCityName }
