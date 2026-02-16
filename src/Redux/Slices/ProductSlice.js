import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    productReducer : (state, action)=>{
        state.value = action.payload
    },
    categoryReducer: (state, action)=>{
        state.value = action.payload
    },
    cartReducer:(state, action)=>{
        state.cart = [...state.cart, action.payload]
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }
  },
})

// Action creators are generated for each case reducer function
export const { productReducer, categoryReducer, cartReducer } = ProductSlice.actions

export default ProductSlice.reducer