import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../features/city/citySlice'
import currentWeatherReducer from '../features/weather/currentWeatherSlice'
import loggedInReducer from '../features/user/loggedInSlice'

export default configureStore({
    reducer: {
        city: cityReducer,
        current: currentWeatherReducer,
        loggedIn: loggedInReducer,
    },
})