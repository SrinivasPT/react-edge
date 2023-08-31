import { DomainList } from '@domain/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const domainApi = createApi({
    reducerPath: 'domain',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        domain: builder.query<DomainList, void>({ query: () => 'domain' }),
    }),
});

export const { useDomainQuery } = domainApi;
