import { createSlice } from '@reduxjs/toolkit'

export const loggedInSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
    },
    reducers: {
        isLoggedIn: (state) => {
            state.loggedIn = true;
        },
        notLoggedIn: (state) => {
            state.loggedIn = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCity } = loggedInSlice.actions

export default loggedInSlice.reducer