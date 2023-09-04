import { FormState, InitialActionPayload } from '@lib/types/form-state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { set } from 'lodash';

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
    custom: {},
    errors: {},
} as FormState;

export const form = createSlice({
    name: 'form',
    initialState,
    reducers: {
        reset: () => initialState,
        setFormDetail: (state, action: PayloadAction<InitialActionPayload>) => {
            const { key, initialData } = action.payload;
            set(state, 'data', { ...initialData });
            set(state.flags, 'isLoading', false);
        },
        onChange: (state, action: PayloadAction<{ key: string; value: string }>) => {
            const { key, value } = action.payload;
            set(state.data, key, value);
        },
    },
});

export const { onChange, setFormDetail, reset } = form.actions;

export default form.reducer;
