import axios from 'axios'
import config from 'config'
import logger from './../lib/utils/logger'
import { WEATHER_MAP_URL } from '../shared/constants'

const getWeatherByCityName = async cityName => {
    const options = {
        method: 'get',
        url: WEATHER_MAP_URL,
        params: {
            q: cityName,
            APPID: config.get('openWeather.apiKey')
        }
    }

    try {
        const { data } = await axios(options)
        return data
    } catch (error) {
        logger.error(error, `Failed to fetch weather for ${cityName}`)
        error.logged = true
        throw error
    }
}

export { getWeatherByCityName }
