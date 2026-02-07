import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    productReducer : (state, action)=>{
        state.value = action.payload
    },
    categoryReducer: (state, action)=>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { productReducer, categoryReducer } = ProductSlice.actions

export default ProductSlice.reducer