import * as weatherCtrl from './../../weather/weatherCtrl'

jest.mock('./../../weather/weatherService')

describe('Weather Controller', () => {
    describe('Weather by city name', () => {
        it('should return weather for the given city', async () => {
            const cityName = 'Belgrade'
            const data = await weatherCtrl.getWeatherByCity(cityName)

            expect(data).toBeDefined()
            expect(data.name).toEqual(cityName)
        })
    })
})
