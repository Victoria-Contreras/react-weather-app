import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
    name: 'favorite',
    initialState: {
       cities: []
    },
    reducers: {
        addToFavorites: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.cities.push(action.payload) 
        },
        removeFromFavorites: (state) => {
            
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer