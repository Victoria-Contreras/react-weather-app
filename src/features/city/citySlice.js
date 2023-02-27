import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: 'Fort Worth',
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCity } = citySlice.actions

export default citySlice.reducer