import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const URL = "http://localhost:6000/api/v1/auth/login"

interface IUser {
    isLogin: boolean
    name: string | null
    surname: string | null
    email: string | null
    avatarUrl: string | null
}
interface IAuthState {
    user: IUser
}
const initialState: IAuthState = {
    user: {
        isLogin: false,
        name: null,
        surname: null,
        email: null,
        avatarUrl: null,
    },
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        logout(state) {
            state.user = initialState.user
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
