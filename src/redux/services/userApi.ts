import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
    id: number;
    login: string;
    url: string;
};

export const userApi = createApi({
    reducerPath: 'userApi',
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
    }),
    endpoints: builder => ({
        getUsers: builder.query<User[], null>({
            query: () => 'users',
        }),
        getUserById: builder.query<User, { id: string }>({
            query: ({ id }) => `users/${id}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
