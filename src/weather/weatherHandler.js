import { boomify } from 'boom'
import { httpStatus } from 'http-status'

import { getWeatherByCity } from './weatherCtrl'
import logger from './../lib/utils/logger'

const getWeatherByCityName = async (req, h) => {
    const cityName = req.query.cityName

    try {
        const data = await getWeatherByCity(cityName)
        const validResponse = h.response({
            name: data.name,
            coord: data.coord,
            weather: data.weather
        })

        return validResponse
    } catch (error) {
        const errorMessage = `Failed to fetch weather for ${cityName}`

        !error.logged && logger.error(error, errorMessage)

        const responseErr = boomify(error, {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: errorMessage
        })

        return responseErr
    }
}

export { getWeatherByCityName }
