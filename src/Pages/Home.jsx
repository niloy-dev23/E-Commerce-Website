import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import FlashSales from '../Components/FlashSales'
import Categories from '../Components/Categories'
import BestSelling from '../Components/BestSelling'
import EnhanceMusic from '../Components/EnhanceMusic'
import OurProducts from '../Components/OurProducts'
import NewArrival from '../Components/NewArrival'
import { useDispatch } from 'react-redux'
import { productReducer } from '../Redux/Slices/ProductSlice'
import axios from 'axios'

const Home = () => {
  return (
    <>
        <Banner/>
        <FlashSales/>
        <Categories/>
        <BestSelling/>
        <EnhanceMusic/>
        <OurProducts/>
        <NewArrival/>
    </>
  )
}

export default Home