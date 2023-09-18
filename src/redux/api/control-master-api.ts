import { Control } from '@lib/types';
import { buildQueryString } from '@lib/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const controlMasterApi = createApi({
    reducerPath: 'controlMaster',
    refetchOnFocus: false,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        AllControls: builder.query<Control[], null>({ query: () => 'control-master' }),
        // getFilteredControls: builder.query<Control[], any>({
        //     query: params => {
        //         let queryStr = 'control-master';

        //         const queryParams = [];
        //         if (params.masterId) queryParams.push(`masterId=${params.masterId}`);
        //         if (params.id) queryParams.push(`id=${params.id}`);
        //         if (params.label) queryParams.push(`id=${params.label}`);

        //         if (queryParams.length) queryStr += `?${queryParams.join('&')}`;
        //         return queryStr;
        //     },
        // }),
        getFilteredControls: builder.query<Control[], any>({ query: params => `control-master?${buildQueryString(params)}` }),
        getControlById: builder.query<Control, { id: string }>({ query: ({ id }) => `control-master/${id}` }),
        getControlByMasterId: builder.query<Control[], { masterId: string }>({ query: ({ masterId }) => `control-master?masterId=${masterId}` }),
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

export const {
    useAllControlsQuery,
    useGetFilteredControlsQuery,
    useGetControlByIdQuery,
    useUpdateControlMutation,
    useDeleteControlMutation,
    useGetControlByMasterIdQuery,
} = controlMasterApi;
