import { configureStore } from "@reduxjs/toolkit";
import productsRedurcer from './products/products.slice'
import categoriesSlice from "./categories/categories.slice";
import cartReducer from './cart/cart.slice';

export const store = configureStore({
    reducer:{
        products: productsRedurcer,
        categories: categoriesSlice,
        cart: cartReducer,
    },
})
