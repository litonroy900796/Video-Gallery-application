import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  endpoints: (builder) => ({
      getVideos:builder.query({
        query:()=> "/videos"
      })
    }),
  
  })


export const {useGetVideosQuery} =ApiSlice;