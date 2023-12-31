import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productsRedurcer from './products/products.slice'
import categoriesSlice from "./categories/categories.slice";
import cartReducer from './cart/cart.slice';
import { categoriesApi } from "./categories/api";
import { productsApi } from "./products/api";
import { ordersApi } from "./orders/api";
import { authApi } from "./auth/api";
import  authReducer from './auth/auth.slice'
import { settingsApi } from "./settings/api";

export const store = configureStore({
    reducer:{
        products: productsRedurcer,
        categories: categoriesSlice,
        cart: cartReducer,
        auth: authReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [settingsApi.reducerPath] : settingsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        categoriesApi.middleware,
        productsApi.middleware, 
        ordersApi.middleware,
        authApi.middleware,
        settingsApi.middleware,
        ),
})

setupListeners(store.dispatch)
