import { createSlice } from '@reduxjs/toolkit'

export const currentWeatherSlice = createSlice({
    name: 'current',
    initialState: {
        data: {}
    },
    reducers: {
        setcurrentWeather: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setcurrentWeather } = currentWeatherSlice.actions

export default currentWeatherSlice.reducer