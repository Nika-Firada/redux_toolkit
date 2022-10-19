import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9999'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    })
})