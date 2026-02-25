import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    wishlist:localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
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
    },
    cartRemoveReducer:(state, action)=>{
      state.cart = state.cart.filter(item => item.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    wishlistReducer:(state, action)=>{
      state.wishlist = [...state.wishlist, action.payload]
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
    },
    wishlistRemoveReducer:(state, action)=>{
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
    }
  },
})

// Action creators are generated for each case reducer function
export const { productReducer, categoryReducer, cartReducer, wishlistReducer, wishlistRemoveReducer, cartRemoveReducer } = ProductSlice.actions

export default ProductSlice.reducer