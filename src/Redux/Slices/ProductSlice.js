import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    categoryItems: [],
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    wishlist:localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
    subTotal:localStorage.getItem("subTotal") ? JSON.parse(localStorage.getItem("subTotal")) : 0,
    buffer:false,
  },
  reducers: {
    productReducer : (state, action)=>{
        state.value = action.payload
    },
    categoryItemsReducer: (state, action)=>{
        state.categoryItems = action.payload
    },
    cardBufferReducer:(state)=>{
        state.buffer=true
    },
    categoryReducer: (state, action)=>{
        state.categoryItems = action.payload
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
    },
    incrementRedcucer:(state,action)=>{
      state.cart = state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    decrementRedcucer:(state,action)=>{
      state.cart = state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    subTotalReducer:(state)=>{
      state.subTotal = state.cart.reduce((initial, next)=>initial + next.price * next.quantity, 0)
      localStorage.setItem('subTotal', JSON.stringify(state.subTotal))
    }
  },
})

// Action creators are generated for each case reducer function
export const { productReducer, categoryReducer, cartReducer, wishlistReducer, wishlistRemoveReducer, cartRemoveReducer, incrementRedcucer, decrementRedcucer, subTotalReducer, cardBufferReducer } = ProductSlice.actions

export default ProductSlice.reducer