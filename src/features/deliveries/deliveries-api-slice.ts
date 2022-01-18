import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IDelivery } from "../../models"

export const deliveriesApi = createApi({
    reducerPath: "deliveriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/v1",
    }),
    endpoints: (builder) => ({
        deliveries: builder.query<IDelivery[], void>({
            query: () => "/deliveries",
        }),
    }),
})

export const { useDeliveriesQuery } = deliveriesApi
