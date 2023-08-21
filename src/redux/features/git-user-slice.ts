import { GitUserList, GitUser } from '@domain/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type GitUserState = {
    list: GitUserList[];
    detail: GitUser;
};

const initialState: GitUserState = {
    list: [] as GitUserList[],
    detail: {} as GitUser,
} as GitUserState;

export const gitUserSlice = createSlice({
    name: 'git-user',
    initialState,
    reducers: {
        reset: () => initialState,
        initializeList: (state, action: PayloadAction<GitUserList[]>) => {
            state.list = action.payload;
        },
        fetchById: (state, action: PayloadAction<GitUser>) => {
            state.detail = action.payload;
        },
    },
});

export const { initializeList, fetchById: fetchDetail, reset } = gitUserSlice.actions;

export default gitUserSlice.reducer;
