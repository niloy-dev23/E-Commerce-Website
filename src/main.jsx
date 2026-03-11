import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './RootLayout'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import ProductDetails from './Pages/ProductDetails'
import CartPage from './Pages/CartPage'
import { ToastContainer } from 'react-toastify'
import Wishlist from './Pages/Wishlist'
import Checkout from './Pages/Checkout'

const router = createBrowserRouter([
  {
    path:'/',
    Component:RootLayout,
    children:[
      {index:true, Component:Home},
      {path:'Shop', Component:Shop},
      {path:'productDetails/:id', Component:ProductDetails},
      {path:'CartPage', Component:CartPage},
      {path:'Wishlist', Component:Wishlist},
      {path:'Checkout', Component:Checkout}
    ]
  }
])

createRoot(document.getElementById('root')).render(
    
    <Provider store={Store}>
      <ToastContainer/>
      <RouterProvider router={router}/>
    </Provider>
    
  
)
