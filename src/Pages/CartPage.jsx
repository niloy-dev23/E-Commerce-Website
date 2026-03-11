import React from 'react'
import Container from '../Components/Container'
import BreadCrump from '../Components/BreadCrump'
import Flex from '../Components/Flex'
import CartItem from '../Components/CartItem'
import flashSales1 from "../assets/flashSales1.png";
import { useSelector } from 'react-redux'
import CommonButton from '../Components/CommonButton'
import { NavLink } from 'react-router'

const CartPage = () => {

  let cartItems = useSelector((state)=>state.allData.cart)
  let subTotal = useSelector((state)=>state.allData.subTotal)
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
                quantity={item.quantity}
                imgSrc={item.thumbnail}
                productName={`${item.title.slice(0,15)}...`}
                price={item.price}
                subTotal={(item.price * item.quantity).toFixed(2)}
                id={item.id}
              />
            )
          })
        }
        <Flex className='mt-6 justify-between'>
          <CommonButton
            name='Return To Shop'
            className='bg-transparent text-black outline outline-black'
          />
          <CommonButton
            name='Update Cart'
            className='bg-transparent text-black outline outline-black'
          />
        </Flex>
        <Flex className='mt-20 justify-between'>
          <Flex className='h-14 gap-4'>
            <input type="text" placeholder='Coupon Code' className='px-6 py-4 outline-0 border border-black rounded-sm w-75'/>
            <CommonButton
              name='Apply Coupon'
              className='bg-red text-white'
            />
          </Flex>
          <div className='outline-2 rounded-sm outline-black px-6 py-8 w-117.5'>
            <h1 className='mb-2 font-medium text-[20px]'>Cart Total</h1>
            <Flex className='justify-between pb-4 border-b border-b-black mt-4'>
              <p>Subtotal</p>
              <p>${subTotal.toFixed(2)}</p>
            </Flex>
            <Flex className='justify-between pb-4 border-b border-b-black mt-4'>
              <p>Shipping</p>
              <p>Free</p>
            </Flex>
            <Flex className='justify-between pb-4 border-b border-b-black mt-4'>
              <p>Total</p>
              <p>${subTotal.toFixed(2)}</p>
            </Flex>
            <div className='w-fit m-auto'>
              <NavLink to='/Checkout'>
                <CommonButton
                  name='Proceed To Checkout'
                  className='bg-red text-white mt-6 cursor-pointer'
                />
              </NavLink>
            </div>
          </div>
        </Flex>
    </Container>
  )
}

export default CartPage