import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IAuthState, IUserRequest, IUserResponse } from "../../models"
import axios from "../../axios"

export const logInUser = createAsyncThunk(
    "auth/logIn",
    async (userData: IUserRequest) => {
        console.log(userData)
        try {
            const data: any = await axios.post("/auth/login", userData, {
                withCredentials: true,
            })
            return (await data.data) as IUserResponse
        } catch (error) {
            console.log(error)
        }
    }
)
const initialState: IAuthState = {
    user: {
        isLogin: false,
        name: null,
        surname: null,
        email: null,
        avatarUrl: null,
        loading: false,
        error: null,
        token: null,
    },
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOutUser(state) {
            state.user = initialState.user
        },
    },

    extraReducers: (builder) => {
        builder.addCase(logInUser.pending, (state) => {
            state.user.loading = true
            state.user.error = null
        })
        builder.addCase(logInUser.fulfilled, (state, { payload }) => {
            state.user.loading = false
            state.user.error = null
            state.user = {
                ...state.user,
                ...payload,
                isLogin: !!payload?.token,
            }
        })
        builder.addCase(logInUser.rejected, (state, { payload }) => {
            state.user.loading = false
            console.log(payload)
            state.user.error = "Error from server"
        })
    },
})

export const { logOutUser } = authSlice.actions
export default authSlice.reducer
