import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { controlMasterApi } from './api/control-master-api';
import { domainApi } from './api/domain-api';
import { formConfigApi } from './api/form-config-api';
import { genericApi } from './api/generic-api';
import { productApi } from './api/product-api';
import { userApi } from './api/user-api';
import { form } from './features/form-slice';

export const store = configureStore({
    reducer: {
        form: form.reducer,
        [domainApi.reducerPath]: domainApi.reducer,
        [genericApi.reducerPath]: genericApi.reducer,
        [formConfigApi.reducerPath]: formConfigApi.reducer,
        [controlMasterApi.reducerPath]: controlMasterApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(genericApi.middleware)
            .concat(productApi.middleware)
            .concat(formConfigApi.middleware)
            .concat(domainApi.middleware)
            .concat(controlMasterApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
