import React from 'react'
import Container from '../Components/Container'
import BreadCrump from '../Components/BreadCrump'
import Flex from '../Components/Flex'
import CartItem from '../Components/CartItem'
import flashSales1 from "../assets/flashSales1.png";

const CartPage = () => {
  return (
    <Container className='pt-20 pb-35'>
        <BreadCrump className='mb-20'/>
        <Flex className='w-full shadow-sm px-10 py-6 text-[16px] justify-between rounded-sm'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </Flex>
        <CartItem
            imgSrc={flashSales1}
            productName="LCD Monitor"
            price="650"
            subTotal="650"
        />
    </Container>
  )
}

export default CartPage