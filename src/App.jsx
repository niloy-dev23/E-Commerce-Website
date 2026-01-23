import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import FlashSales from './Components/FlashSales'
import Categories from './Components/Categories'
import BestSelling from './Components/BestSelling'
import EnhanceMusic from './Components/EnhanceMusic'
import OurProducts from './Components/OurProducts'
import NewArrival from './Components/NewArrival'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>
      <FlashSales/>
      <Categories/>
      <BestSelling/>
      <EnhanceMusic/>
      <OurProducts/>
      <NewArrival/>
      <Footer/>
    </>
  )
}

export default App
