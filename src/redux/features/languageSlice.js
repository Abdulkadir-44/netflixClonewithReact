import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'Türkçe'
}


export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            action.payload === 'Türkçe' ? state.value = 'Türkçe' : state.value = 'English'
        }
    }
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer