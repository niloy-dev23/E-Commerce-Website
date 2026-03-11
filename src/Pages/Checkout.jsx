import React from 'react'
import Container from '../Components/Container'
import BreadCrump from '../Components/BreadCrump'
import Flex from '../Components/Flex'
import CommonInput from '../Components/CommonInput'
import CheckoutItem from '../Components/CheckoutItem'
import { useSelector } from 'react-redux'

const Checkout = () => {
    let cartItems = useSelector((state)=>state.allData.cart)
    let subTotal = useSelector((state)=>state.allData.subTotal)
  return (
    <Container className='pt-20 pb-35'>
        <BreadCrump/>
        <h1 className='font-inter font-medium text-[36px] mt-20'>Billing Details</h1>
        <Flex className='justify-between'>
            <div className='w-117.5 mt-12'>
                <CommonInput
                    label="First Name"
                    required={true}
                />
                <CommonInput
                    label="Company Name"
                    required={false}
                />
                <CommonInput
                    label="Street Address"
                    required={true}
                />
                <CommonInput
                    label="Apartment, floor, etc. (Optional)"
                    required={false}
                />
                <CommonInput
                    label="Town/City"
                    required={true}
                />
                <CommonInput
                    label="Phone Number"
                    required={true}
                />
                <CommonInput
                    label="Email Address"
                    required={true}
                />
                <CommonInput
                    label="First Name"
                    required={true}
                />
                <input type="checkbox" className='mr-2'/> Save this information for faster checkout next-time
            </div>
            <div className='w-131.75'>
                {cartItems.map((item, index)=>{
                    return (
                        <CheckoutItem
                            imgSrc={item.thumbnail}
                            productName={item.title.slice(0,15) + '...'}
                            price={item.price*item.quantity}
                            key={index}
                            quantity={item.quantity}
                        />
                    )
                })}
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
            <Flex>
                <div><input type="radio" /></div>
            </Flex>
            </div>
        </Flex>
    </Container>
  )
}

export default Checkout