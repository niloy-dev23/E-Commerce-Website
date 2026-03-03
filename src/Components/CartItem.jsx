import React from 'react'
import Flex from './Flex'
import Cross from '../assets/Cross.png'
import { useDispatch, useSelector } from 'react-redux'
import { cartRemoveReducer, decrementRedcucer, incrementRedcucer, subTotalReducer } from '../Redux/Slices/ProductSlice'
import { Bounce, toast } from 'react-toastify'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const CartItem = ({imgSrc, productName, price, subTotal, id, quantity}) => {
    const dispatch = useDispatch()
    const toastRemoveNotify = (name)=>{
    toast.info(`Product removed from ${name}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    })
  }
    const handleDelete = ()=>{
        toastRemoveNotify('Cart')
        dispatch(cartRemoveReducer(id))
        dispatch(subTotalReducer())  
    }
    const handleIncrement = ()=>{
        dispatch(incrementRedcucer(id))
        dispatch(subTotalReducer())
    }
    const handleDecrement = ()=>{
        if(quantity > 1){
            dispatch(decrementRedcucer(id))
            dispatch(subTotalReducer())
        }
    }
  return (
    <Flex className='w-full shadow-sm px-10 py-6 text-[16px] items-center rounded-sm mt-10'>
            <Flex className='items-center gap-5 w-86 relative'>
                <img src={imgSrc} alt="image" className='w-13.5'/>
                <h2>{productName}</h2>
                <div onClick={handleDelete} className='flex w-5.5 h-5.5 cursor-pointer bg-red justify-center items-center rounded-full absolute -top-2 -left-2 text-[15px]font-bold text-white'><img src={Cross} alt="cross" className='w-2.5'/></div>
            </Flex>
            <Flex className='justify-between items-center w-185'>
                <h1>${price}</h1>
                <Flex className='rounded-sm border border-black p-2 items-center gap-2'>
                    <span>{quantity}</span>
                    <div>
                        <IoIosArrowUp className='cursor-pointer' onClick={handleIncrement} />
                        <IoIosArrowDown className='cursor-pointer' onClick={handleDecrement} />
                    </div>
                </Flex>
                <h1>${subTotal}</h1>
            </Flex>
    </Flex>
  )
}

export default CartItem