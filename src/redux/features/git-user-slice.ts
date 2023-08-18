import { User, UserList } from '@domain/types/git';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type GitUserState = {
    list: UserList[];
    detail: User;
};

const initialState: GitUserState = {
    list: [] as UserList[],
    detail: {} as User,
} as GitUserState;

// export const fetchUserList = createAsyncThunk('gitUser/fetchUserList', async (_, { dispatch }) => {
//     const { data, isLoading, error } = useGetGitUsersQuery();
//     if (isLoading) return;
//     if (error) throw error;
//     return data;
// });

// export const fetchUserById = createAsyncThunk('gitUser/fetchUserById', async (id: string, { dispatch }) => {
//     try {
//         const response = await gitUserApi.endpoints.getGitUserById.initiate({ id });
//         return response;
//     } catch (error) {
//         throw error;
//     }
// });

export const gitUserSlice = createSlice({
    name: 'gitUser',
    initialState,
    reducers: {
        reset: () => initialState,
        initializeList: (state, action: PayloadAction<UserList[]>) => {
            state.list = action.payload;
        },
        fetchById: (state, action: PayloadAction<User>) => {
            state.detail = action.payload;
        },
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase(fetchUserList.fulfilled, (state, action) => {
    //             state.list = action.payload;
    //         })
    //         .addCase(fetchUserList.rejected, (state, action) => {
    //             console.error(action.error);
    //         });
    // },
});

export const { initializeList, fetchById: fetchDetail, reset } = gitUserSlice.actions;

export default gitUserSlice.reducer;
