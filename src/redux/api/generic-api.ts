import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const genericApi = createApi({
    reducerPath: 'generic',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        genericGetAll: builder.query<any, { entity: string }>({
            query: ({ entity }) => `${entity}`,
        }),
        genericGet: builder.query<any, { entity: string; id: string }>({
            query: ({ entity, id }) => `${entity}/${id}`,
        }),
    }),
});

export const { useGenericGetAllQuery, useGenericGetQuery } = genericApi;
