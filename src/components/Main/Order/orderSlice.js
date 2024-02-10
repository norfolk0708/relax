import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const orderSlice = createSlice({
    name: 'orderAmount',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.orderAmount += action.payload
        },
        deleteProduct: (state, action) => {
            state.orderAmount -= action.payload
        }
    }
})

export const {addProduct, deleteProduct} = orderSlice.actions

export default orderSlice.reducer