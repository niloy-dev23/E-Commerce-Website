import React from 'react'
import Container from './Container'
import { IoIosArrowForward } from 'react-icons/io'

const Banner = () => {
  return (
    <>
        <Container>
            <ul className='w-54.25 flex flex-col gap-y-4 pr-5.5 border-r border-black pt-10'>
                <li className='flex items-center justify-between'>
                    <p>Woman's Fashion</p>
                    <IoIosArrowForward />
                </li>
                <li className='flex items-center justify-between'>
                    <p>Man's Fashion</p>
                    <IoIosArrowForward />
                </li>
                <li>Electronics</li>
                <li>Home and Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's and Toys</li>
                <li>Groceries</li>
                <li>Health and Beauty</li>
            </ul>
        </Container>
    </>
  )
}

export default Banner