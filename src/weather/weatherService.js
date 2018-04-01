import config from 'config'
import logger from './../lib/utils/logger'
import { apiService } from '../lib/apiService'

const getWeatherByCityName = async cityName => {
    const options = {
        params: {
            q: cityName,
            APPID: config.get('openWeather.apiKey')
        }
    }

    try {
        const { data } = await apiService.get('/weather', options)
        return data
    } catch (error) {
        logger.error(error, `Failed to fetch weather for ${cityName}`)
        error.logged = true
        throw error
    }
}

export { getWeatherByCityName }
