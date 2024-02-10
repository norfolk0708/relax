import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Main/Counter/counterSlice";
import orderReducer from "../components/Main/Order/orderSlice";
import productsReducer from "../components/Main/CreateProduct/createProductSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        orderAmount: orderReducer,
        products: productsReducer
    },
})
