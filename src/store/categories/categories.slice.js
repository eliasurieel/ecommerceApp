import { createSlice } from "@reduxjs/toolkit";

import CATEGORIES from '../../constants/data/categories.json'

const initialState ={
    data: CATEGORIES,
}

const categorisSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
})

export default categorisSlice.reducer