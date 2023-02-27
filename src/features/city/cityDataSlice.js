import { createSlice } from '@reduxjs/toolkit'

export const cityDataSlice = createSlice({
    name: 'data',
    initialState: {
        data: {}
    },
    reducers: {
        setCityData: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCityData } = cityDataSlice.actions

export default cityDataSlice.reducer