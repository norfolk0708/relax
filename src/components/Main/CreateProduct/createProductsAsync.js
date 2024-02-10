import { createAsyncThunk } from "@reduxjs/toolkit";
import FetchService from "../../../API/FetchService";

export const fetchAllProducts = createAsyncThunk(
    '/productsEditor',
    async() => {
        const response = await FetchService.getAllProducts()
        return response
    }
)