import React from 'react'
import Flex from './Flex'


const CartItem = ({imgSrc, productName, price, subTotal}) => {
  return (
    <Flex className='w-full shadow-sm px-10 py-6 text-[16px] items-center rounded-sm mt-10'>
        <Flex className='gap-44.25'>
            <Flex className='items-center gap-5'>
                <img src={imgSrc} alt="image" className='w-13.5'/>
                <h2>{productName}</h2>
            </Flex>
            <Flex className='gap-70.5 items-center'>
                <h1>${price}</h1>
                <input type="number" defaultValue={1} className='px-3 py-1.5 w-18 h-11 outline-0 border border-black rounded-sm'/>
                <h1>${subTotal}</h1>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CartItem