import { configureStore } from "@reduxjs/toolkit";
import productsRedurcer from './products/products.slice'

export const store = configureStore({
    reducer:{
        products: productsRedurcer,
    },
})
