import { FormConfig } from '@lib/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formConfigApi = createApi({
    reducerPath: 'formConfig',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        AllForms: builder.query<FormConfig[], null>({ query: () => 'form-config' }),
        getFormById: builder.query<FormConfig, { id: string }>({ query: ({ id }) => `form-config/${id}` }),
        addForm: builder.mutation<FormConfig, FormConfig>({ query: newConfig => ({ url: 'form-config', method: 'POST', body: newConfig }) }),
        updateForm: builder.mutation<FormConfig, { id: string; changes: FormConfig }>({
            query: ({ id, changes }) => ({ url: `form-config/${id}`, method: 'PUT', body: changes }),
        }),
        deleteForm: builder.mutation<{ success: boolean; id: string }, string>({
            query: id => ({ url: `form-config/${id}`, method: 'DELETE' }),
        }),
    }),
});

export const { useAllFormsQuery, useGetFormByIdQuery, useAddFormMutation, useUpdateFormMutation, useDeleteFormMutation } = formConfigApi;
