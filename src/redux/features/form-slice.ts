import { FormState, InitialActionPayload } from '@lib/types/form-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState: FormState = {
    data: {},
    flags: {
        isLoading: true,
        isEditing: false,
        isError: false,
        isSaved: false,
        isSaveInProgress: false,
        errorMessage: null,
    },
    internal: {
        table: {},
    },
    custom: {},
    errors: {},
} as FormState;

export const form = createSlice({
    name: 'form',
    initialState,
    reducers: {
        reset: () => initialState,
        // Initialization
        setFormDetail: (state, action: PayloadAction<InitialActionPayload>) => {
            const { key, initialData } = action.payload;
            _.set(state, 'data', { ...initialData });
            _.set(state.flags, 'isLoading', false);
        },

        // Table
        toggleTableEditableStatus: (state, action: PayloadAction<{ guid: string }>) => {
            const { guid } = action.payload;

            if (!state.internal.table[guid]) {
                // Initialize the table with the given key if it doesn't exist
                state.internal.table[guid] = {
                    selectedRecords: {},
                    isEditable: false, // Default to true if key is being created for the first time
                };
            } else {
                // Toggle the editable status if the table key exists
                state.internal.table[guid].isEditable = !state.internal.table[guid].isEditable;
            }
        },

        // Control
        onChange: (state, action: PayloadAction<{ key: string; value: string }>) => {
            const { key, value } = action.payload;
            _.set(state, key, value);
        },
    },
});

export const { onChange, setFormDetail, reset, toggleTableEditableStatus } = form.actions;

export default form.reducer;
