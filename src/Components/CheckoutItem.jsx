import React from 'react'
import Flex from './Flex'

const CheckoutItem = ({ imgSrc, productName, price, quantity }) => {
  return (
    <Flex className='lg:gap-6 gap-2 items-center h-17.5 mb-5'>
        <img src={imgSrc} alt="Image" className='lg:w-13.5 w-10'/>
        <Flex className='w-full justify-between items-center'>
            <p>{productName} <span>x{quantity}</span></p>
            <p>${price.toFixed(2)}</p>
        </Flex>
    </Flex>
  )
}

export default CheckoutItem