import { Control } from '@lib/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const controlMasterApi = createApi({
    reducerPath: 'controlMaster',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        AllControls: builder.query<Control[], null>({ query: () => 'control-master' }),
        getControlById: builder.query<Control, { id: string }>({ query: ({ id }) => `control-master/${id}` }),
        addControl: builder.mutation<Control, Control>({
            query: newControl => ({ url: 'control-master', method: 'POST', body: newControl }),
        }),
        updateControl: builder.mutation<Control, { id: string; changes: Control }>({
            query: ({ id, changes }) => ({ url: `control-master/${id}`, method: 'PUT', body: changes }),
        }),
        deleteControl: builder.mutation<{ success: boolean; id: string }, string>({
            query: id => ({ url: `control-master/${id}`, method: 'DELETE' }),
        }),
    }),
});

export const { useAllControlsQuery } = controlMasterApi;
