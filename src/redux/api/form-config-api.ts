import { FormConfig } from '@lib/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formConfigApi = createApi({
    reducerPath: 'formConfigApi',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getAllFormConfig: builder.query<FormConfig[], null>({ query: () => 'form-config' }),
    }),
});

export const { useGetAllFormConfigQuery } = formConfigApi;
