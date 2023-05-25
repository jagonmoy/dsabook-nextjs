'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './customBaseQuery'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Blogs'],
  endpoints: builder => ({
    getAllBlogs: builder.query({
      query: () => '/blogs',
      providesTags: ['Blogs']
    }),
    getBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        providesTags: ['Blogs']
      })
    }),
    createBlog: builder.mutation({
      query: ({blogHeadline,blogDescription,token}) => ({
        url: '/blogs' ,
        method: 'POST' ,
        body: {blogHeadline,blogDescription},
    }),
    invalidatesTags: ['Blogs']
    }),
    updateBlog: builder.mutation({
      query: ({blogHeadline,blogDescription,token,id}) => ({
        url: `/blogs/${id}` ,
        method: 'PATCH' ,
        body: {blogHeadline,blogDescription},
    }),
    invalidatesTags: ['Blogs']
    }),
    deleteBlog: builder.mutation({
      query: ({token,id}) => ({
        url: `/blogs/${id}` ,
        method: 'DELETE' ,
        body: {},
    }),
    invalidatesTags: ['Blogs']
    }),
    
    addNewUser: builder.mutation({
      query: (newUser) => ({
          url: '/auth/sign-up' ,
          method: 'POST' ,
          body: newUser
      }),
    }),
    authUser: builder.mutation({
      query: ({token,username,password}) => ({
          url: '/auth/sign-in' ,
          method: 'POST' ,
          body: {username,password},
      })
    }),
    signOut: builder.mutation({
      query: (refreshToken)=> ({
        url: `/auth/sign-out`,
        method:'POST',
        body:{refreshToken}
      })
    }),
  })
})

export const { 
     useGetAllBlogsQuery,
     useGetBlogQuery, 
//   useAddNewUserMutation, 
     useAuthUserMutation, 
//   useCreateBlogMutation,
//   useEditBlogMutation,
//   useDeleteBlogMutation,
//   useSignOutMutation
  } 
  = apiSlice