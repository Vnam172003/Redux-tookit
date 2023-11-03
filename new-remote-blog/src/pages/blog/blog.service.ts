import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'Types/blog.type'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (build) => ({
    //genericType theo thu tu la kieu response tra ve mot argument
    getPost: build.query<Post[], void>({
      query: () => 'posts'
    })
  })
})

export const { useGetPostQuery } = blogApi
