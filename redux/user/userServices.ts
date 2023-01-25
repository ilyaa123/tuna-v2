import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { serverUrl } from '../../constants/serverConstants';

export const userApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: serverUrl}),
    extractRehydrationInfo(action, { reducerPath, }) {
        if (action.type === HYDRATE){
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `/posts`,
        }),
        
    }),
})

export const { useGetPostsQuery } = userApi