import { GitUser, GitUserList } from '@domain/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gitUserApi = createApi({
    reducerPath: 'gitUser',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    endpoints: builder => ({
        getGitUsers: builder.query<GitUserList[], void>({ query: () => 'users' }),
        getGitUserById: builder.query<GitUser, { id: string }>({ query: ({ id }) => `users/${id}` }),
    }),
});

export const { useGetGitUsersQuery, useGetGitUserByIdQuery } = gitUserApi;
