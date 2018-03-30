import * as weatherService from './weatherService'

const getWeatherByCity = async cityName => {
    return weatherService.getWeatherByCityName(cityName)
}

export { getWeatherByCity }
