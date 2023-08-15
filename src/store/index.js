import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productsRedurcer from './products/products.slice'
import categoriesSlice from "./categories/categories.slice";
import cartReducer from './cart/cart.slice';
import { categoriesApi } from "./categories/api";

export const store = configureStore({
    reducer:{
        products: productsRedurcer,
        categories: categoriesSlice,
        cart: cartReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
})

setupListeners(store.dispatch)
