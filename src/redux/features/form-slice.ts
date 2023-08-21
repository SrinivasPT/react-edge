import { User } from '@domain/types';
import { FormState } from '@lib/types/form-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { set } from 'lodash';

const initialState: FormState = {
    detail: {},
    criteria: {},
    list: [],
    state: {
        isLoading: false,
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
        setFormDetail: (state, action: PayloadAction<User>) => {
            set(state, 'detail', action.payload);
            set(state, 'isLoading', false);
        },
        onChange: (state, action: PayloadAction<{ dataKey: string; value: string }>) => {
            const { dataKey, value } = action.payload;
            set(state, dataKey, value);
        },
    },
});

export const { onChange, setFormDetail, reset } = form.actions;

export default form.reducer;
