import { FormConfig } from '@lib/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formConfigApi = createApi({
    reducerPath: 'config',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        AllForms: builder.query<FormConfig[], null>({ query: () => 'form-config' }),
    }),
});

export const { useAllFormsQuery } = formConfigApi;
