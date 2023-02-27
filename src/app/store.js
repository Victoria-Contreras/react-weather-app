import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../features/city/citySlice'
import cityDataReducer from '../features/city/cityDataSlice'

export default configureStore({
    reducer: {
        city: cityReducer,
        data: cityDataReducer,
    },
})