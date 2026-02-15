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

const router = createBrowserRouter([
  {
    path:'/',
    Component:RootLayout,
    children:[
      {index:true, Component:Home},
      {path:'Shop', Component:Shop},
      {path:'productDetails/:id', Component:ProductDetails},
      {path:'CartPage', Component:CartPage}
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>
    
  
)
