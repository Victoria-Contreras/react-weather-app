import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../features/city/citySlice'
import currentWeatherReducer from '../features/weather/currentWeatherSlice'

export default configureStore({
    reducer: {
        city: cityReducer,
        current: currentWeatherReducer,
    },
})