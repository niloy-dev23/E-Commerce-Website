import { configureStore } from '@reduxjs/toolkit'
import { ProductSlice } from './Slices/productSlice'

export default configureStore({
  reducer: {
    allData: ProductSlice.reducer
  },
})