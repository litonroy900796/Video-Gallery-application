import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  endpoints: (builder) => ({
      getVideos:builder.query({
        query:()=> "/videos"
      }),
      getVideo:builder.query({
        query:(paramId)=> `/videos/${paramId}`
      }),
      relatedVideo:builder.query({
        query:({id, title})=> {
          const tags=title?.split(' ');
          let likeTags = tags.map((tag)=> `title_like=${tag}`);
          let queryString = `/videos?${likeTags.join('&')}&_limit=4&id_ne=${id}`;	
          return queryString;
        }
      }),
    }),
  
  })


export const {useGetVideosQuery,useGetVideoQuery,useRelatedVideoQuery} =ApiSlice;