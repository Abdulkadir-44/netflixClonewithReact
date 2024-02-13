import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        userIsLogout: (state) => {
            state.isLogin = false
        }
    }
})


export const { userIsLogin ,userIsLogout} = userSlice.actions

export default userSlice.reducer