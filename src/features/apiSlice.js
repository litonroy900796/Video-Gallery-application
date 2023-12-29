import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  tagTypes:["videos","video", "relatedVideo"],
  endpoints: (builder) => ({
      getVideos:builder.query({
        query:()=> "/videos",
        keepUnusedDataFor:600,
        providesTags:["videos"]
      }),
      getVideo:builder.query({
        query:(paramId)=> `/videos/${paramId}`,
        providesTags:(result,error,arg) => [
          "videos",
          {type: "video", id:arg},
        ]
      }),
      relatedVideo:builder.query({
        query:({id, title})=> {
          const tags=title?.split(' ');
          let likeTags = tags.map((tag)=> `title_like=${tag}`);
          let queryString = `/videos?${likeTags.join('&')}&_limit=4&id_ne=${id}`;	
          return queryString;
        },
        providesTags:(result,error,arg) => [
          "videos",
          {type: "relatedVideo", id:arg.id},
        ]
      }),
      addVideo:builder.mutation({
          query:(data)=>({
             url:'/videos',
             method: 'POST',
             body:data
          }),
          invalidatesTags:["videos"]
      }),
      editVideo:builder.mutation({
        query:({id,data})=>({
           url:`/videos/${id}`,
           method: 'PATCH',
           body:data
        }),
        invalidatesTags: (result,error,arg) => [
          "videos",
          {type: "video", id:arg.id },
          {type: "relatedVideo", id:arg.id }
        ]
        
    }),
      deleteVideo:builder.mutation({
        query:(id)=>({
           url:`/videos/${id}`,
           method: 'DELETE',
        
        }),
        invalidatesTags:  ["videos"]
        
    }),
    }),
  
  })


export const {useGetVideosQuery,useGetVideoQuery,useRelatedVideoQuery,useAddVideoMutation,useEditVideoMutation,useDeleteVideoMutation} =ApiSlice;