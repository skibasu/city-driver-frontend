import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUserResponse, IUserRequest } from "../../models"

export const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.0.8:3000/api/v1/",
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IUserResponse, IUserRequest>({
            query: (user) => ({
                url: "/auth/login",
                method: "POST",
                body: user,
            }),
        }),
    }),
})

export const { useLoginMutation } = authApi
