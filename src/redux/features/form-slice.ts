import { FormState, InitialActionPayload } from '@lib/types/form-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState: FormState = {
    searchCriteria: {},
    data: {},
    flags: { isLoading: true, isEditing: false, isError: false, isSaved: false, isSaveInProgress: false },
    internal: { table: {}, temp: {} },
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
            const { initialData } = action.payload;
            _.set(state, 'data', initialData);
            _.set(state.flags, 'isLoading', false);
        },

        setFilteredData: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        },

        // Table
        toggleTableEditableStatus: (state, action: PayloadAction<{ key: string }>) => {
            const { key } = action.payload;

            if (!state.internal.table[key]) {
                // Initialize the table with the given key if it doesn't exist
                state.internal.table[key] = {
                    selectedRecords: {},
                    isEditable: false, // Default to true if key is being created for the first time
                };
            } else {
                // Toggle the editable status if the table key exists
                state.internal.table[key].isEditable = !state.internal.table[key].isEditable;
            }
        },

        selectRow: (state, action: PayloadAction<{ key: string; rowId: any }>) => {
            const { key, rowId } = action.payload;
            if (!state.internal.table[key]) {
                // Initialize the table with the given key if it doesn't exist
                state.internal.table[key] = {
                    selectedRecords: {},
                    isEditable: false, // Default to true if key is being created for the first time
                    selectedRowId: rowId,
                };
            } else {
                // Toggle the editable status if the table key exists
                state.internal.table[key].selectedRowId = rowId;
            }
        },

        rowAction: (state, action: PayloadAction<{ key: string; rowId: any; action: string }>) => {},

        // Control
        onChange: (state, action: PayloadAction<{ key: string; value: string }>) => {
            const { key, value } = action.payload;
            _.set(state, key, value);
        },

        // Internal temp state
        setInternalTemp: (state, action: PayloadAction<{ key: string; value: any }>) => {
            _.set(state.internal.temp, action.payload.key, action.payload.value);
        },

        // Add passed in object in a array whose path is passed in as key
        addToArray: (state, action: PayloadAction<{ key: string; value: any }>) => {
            const { key, value } = action.payload;
            const array = _.get(state, key);
            array.push(value);
            _.set(state, key, array);
        },

        // set flags in the internal state for various triggers
        setFlag: (state, action: PayloadAction<{ key: string }>) => {
            const { key } = action.payload;
            _.set(state.flags, key, true);
        },
        removeFlag: (state, action: PayloadAction<{ key: string }>) => {
            const { key } = action.payload;
            _.set(state.flags, key, false);
        },
    },
});

export const {
    onChange,
    setFormDetail,
    reset,
    toggleTableEditableStatus,
    selectRow,
    setFilteredData,
    setInternalTemp,
    addToArray,
    setFlag,
    removeFlag,
} = form.actions;

export default form.reducer;
