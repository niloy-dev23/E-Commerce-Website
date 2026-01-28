import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './RootLayout'
import Home from './Pages/Home'
import Shop from './Pages/Shop'

const router = createBrowserRouter([
  {
    path:'/',
    Component:RootLayout,
    children:[
      {index:true, Component:Home},
      {path:'Shop', Component:Shop}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
