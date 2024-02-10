import { createSlice } from '@reduxjs/toolkit'
import { fetchAllProducts } from './createProductsAsync'

export const createProductSlice = createSlice({
    name: 'products',
    initialState: {
        products: [{}]
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload)
        },
        updateProduct: (state, action) => {
            state.products.forEach((obj, i) => {
                if(obj._id === action.payload.id) {
                    state.products[i][action.payload.value] = action.payload.newName
                }   
            })
        },    
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.status = false
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = true
                state.error = false
                state.products = action.payload
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = true
                state.error = action.error.message
            })
    }
})
export const selectAllProducts = state => state.products.products
export const { addProduct, deleteProduct, updateProduct} = createProductSlice.actions
export default createProductSlice.reducer


/*getAllProducts: (state, action) => {
            state.products = action.payload
        },
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload)
        },
        updateProduct: (state, action) => {
            state.products.forEach((obj, i) => {
                if(obj._id == action.payload.id) {
                    state.products[i][action.payload.value] = action.payload.newName
                }   
            })
        }, */