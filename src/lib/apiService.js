import axios from 'axios'
import { WEATHER_MAP_URL } from './../shared/constants'

export const apiService = axios.create({
    baseURL: WEATHER_MAP_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})
