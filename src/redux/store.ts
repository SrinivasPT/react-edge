import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { formConfigApi } from './api/form-config-api';
import { productApi } from './api/product-api';
import { userApi } from './api/user-api';
import { form } from './features/form-slice';

export const store = configureStore({
    reducer: {
        form: form.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [formConfigApi.reducerPath]: formConfigApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(userApi.middleware).concat(productApi.middleware).concat(formConfigApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;