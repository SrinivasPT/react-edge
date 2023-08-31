import { FormConfig } from '@lib/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formConfigApi = createApi({
    reducerPath: 'config',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        AllForms: builder.query<FormConfig[], void>({ query: () => 'form-config' }),
        getFormById: builder.query<FormConfig, { id: string }>({ query: ({ id }) => `form-config/${id}` }),
    }),
});

export const { useAllFormsQuery, useGetFormByIdQuery } = formConfigApi;
