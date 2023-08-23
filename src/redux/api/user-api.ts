import { User } from '@domain/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'user',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        allUsers: builder.query<User[], null>({ query: () => 'user' }),
        selectedUser: builder.query<User, { id: string }>({ query: ({ id }) => `user/${id}` }),
    }),
});

export const { useAllUsersQuery, useSelectedUserQuery } = userApi;
