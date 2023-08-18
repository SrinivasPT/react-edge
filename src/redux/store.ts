import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { counter } from './features/counter-slice';
import { gitUserSlice } from './features/git-user-slice';
import { gitUserApi } from './service/git-api';

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
        gitUserSlice: gitUserSlice.reducer,
        [gitUserApi.reducerPath]: gitUserApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitUserApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
