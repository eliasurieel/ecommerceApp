import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from '../../constants/data/products.json';
import { State } from "react-native-gesture-handler";

const initialState = {
    data: PRODUCTS
}

const productsSlices = createSlice({
    name: "products",
    initialState,
    reducers:{},
})

export default productsSlices.reducer