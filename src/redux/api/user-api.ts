import { User } from '@domain/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getUsers: builder.query<User[], null>({ query: () => 'user' }),
        getUserById: builder.query<User, { id: string }>({ query: ({ id }) => `user/${id}` }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
