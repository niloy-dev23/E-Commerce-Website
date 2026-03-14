import React from 'react'
import Container from '../Components/Container'
import BreadCrump from '../Components/BreadCrump'
import Flex from '../Components/Flex'
import CommonInput from '../Components/CommonInput'
import CheckoutItem from '../Components/CheckoutItem'
import { useSelector } from 'react-redux'
import Payments from '../assets/payments.png'
import CommonButton from '../Components/CommonButton'

const Checkout = () => {
    let cartItems = useSelector((state)=>state.allData.cart)
    let subTotal = useSelector((state)=>state.allData.subTotal)
  return (
    <Container className='pt-20 pb-35'>
        <BreadCrump/>
        <h1 className='font-inter font-medium text-[36px] mt-20 ml-4 lg:ml-0'>Billing Details</h1>
        <Flex className='justify-between flex-col lg:flex-row'>
            <div className='lg:w-117.5 mt-12 w-[90%] m-auto lg:m-0'>
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
                <Flex className='items-center'>
                    <input type="checkbox" className='mr-2 w-6 h-6 bg-red'/> 
                    <h1>Save this information for faster checkout next-time</h1>
                </Flex>
            </div>
            <div className='lg:w-131.75 w-[90%] m-auto mt-20'>
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
            <div className='mt-9 w-full'>
                <Flex className='gap-4 items-center w-full'>
                    <input type="radio" className='w-6 h-6' name='paymentChoice'/>
                    <Flex className='gap-64.75 items-center'>
                        <h1>Bank</h1>
                        <img src={Payments} alt="Banks" />
                    </Flex>
                </Flex>
                <Flex className='gap-4 items-center w-full my-8'>
                    <input type="radio" className='w-6 h-6' name='paymentChoice'/>
                    <h1>Cash On Delivery</h1>
                </Flex>
                <Flex className='h-14 gap-4'>
                    <input type="text" placeholder='Coupon Code' className='px-6 py-4 outline-0 border border-black rounded-sm w-75'/>
                    <CommonButton
                        name='Apply Coupon'
                        className='bg-red text-white cursor-pointer'
                    />
                </Flex>
                <CommonButton
                        name='Place Order'
                        className='bg-red text-white mt-8 cursor-pointer'
                />
            </div>
            </div>
        </Flex>
    </Container>
  )
}

export default Checkout