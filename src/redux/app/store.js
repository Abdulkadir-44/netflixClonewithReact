import {configureStore} from '@reduxjs/toolkit'
import languageReducer from '../features/languageSlice'
import userReducer from '../features/userSlice'
export const store=configureStore({
    reducer:{
        language:languageReducer,
        user:userReducer
    }
})