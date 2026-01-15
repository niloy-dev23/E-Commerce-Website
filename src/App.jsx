import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import FlashSales from './Components/FlashSales'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>
      <FlashSales/>
    </>
  )
}

export default App
