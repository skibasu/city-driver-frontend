import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/auth-slice"
import { deliveriesApi } from "../features/deliveries/deliveries-api-slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [deliveriesApi.reducerPath]: deliveriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(deliveriesApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
