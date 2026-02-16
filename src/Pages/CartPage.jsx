import React from 'react'
import Container from '../Components/Container'
import BreadCrump from '../Components/BreadCrump'
import Flex from '../Components/Flex'
import CartItem from '../Components/CartItem'
import flashSales1 from "../assets/flashSales1.png";
import { useSelector } from 'react-redux'

const CartPage = () => {

  let cartItems = useSelector((state)=>state.allData.cart)

  return (
    <Container className='pt-20 pb-35'>
        <BreadCrump className='mb-20'/>
        <Flex className='w-full shadow-sm px-10 py-6 text-[16px] justify-between rounded-sm'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </Flex>
        {
          cartItems.map((item, index)=>{
            return (
              <CartItem
                key={index}
                imgSrc={item.thumbnail}
                productName={`${item.title.slice(0,15)}...`}
                price={item.price}
                subTotal={item.price}
              />
            )
          })
        }
    </Container>
  )
}

export default CartPage