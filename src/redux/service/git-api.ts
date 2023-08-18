import { User, UserList } from '@domain/types/git';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gitUserApi = createApi({
    reducerPath: 'gitUser',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    endpoints: builder => ({
        getGitUsers: builder.query<UserList[], void>({ query: () => 'users' }),
        getGitUserById: builder.query<User, { id: string }>({ query: ({ id }) => `users/${id}` }),
    }),
});

export const { useGetGitUsersQuery, useGetGitUserByIdQuery } = gitUserApi;
