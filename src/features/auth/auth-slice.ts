import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
        name: "test",
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
    },
})

export const { login } = authSlice.actions
export default authSlice.reducer
