import fs from 'fs'
import path from 'path'

const getWeatherByCityName = cityName =>
    new Promise((resolve, reject) => {
        // Load user json data from a file
        const filePath = path.resolve(__dirname, `${cityName}.json`)
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            // Parse the data as JSON
            resolve(JSON.parse(data))
        })
    })

export { getWeatherByCityName }
