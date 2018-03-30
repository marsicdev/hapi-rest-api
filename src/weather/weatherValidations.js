import { joi } from 'joi'

const weatherValidations = {
    // GET /weather
    weather: {
        headers: {},
        query: {
            cityName: joi
                .string()
                .trim()
                .required()
                .description('name of the city whose weather is to be fetched')
        },
        options: {
            allowUnknown: true
        }
    }
}

export { weatherValidations }
