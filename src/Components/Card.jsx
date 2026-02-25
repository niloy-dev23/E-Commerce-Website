import fiveStar from "../assets/fiveStar.png";
import { FiEye } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { Rate } from "antd";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartReducer, wishlistReducer, wishlistRemoveReducer } from "../Redux/Slices/productSlice";
import { Bounce, toast } from "react-toastify";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";


const Card = ({imgSrc, discount, title, price, rating, reviews, id, cardData}) => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let cartItems = useSelector(state=>state.allData.cart)
  let wishlistItems = useSelector(state=>state.allData.wishlist)
  const handleClick = ()=>{
    navigate(`/productDetails/${id}`)
  }
  
  // const [love, setLove] = useState(false)
  let love = localStorage.getItem(`love ${id}`) ? JSON.parse(localStorage.getItem(`love ${id}`)) : false
  console.log(typeof love)
  const toastSuccessNotify = (name)=>{
    toast.success(`Product added to ${name}`, {
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
  const toastErrorNotify = (name)=>{
    toast.error(`Product already in ${name}`, {
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

  const handleCart = ()=>{
    let matchedItems = cartItems.find(item => item.id === cardData.id)
    if(!matchedItems){
      dispatch(cartReducer(cardData))
      toastSuccessNotify('Cart')
    }
    else{
      toastErrorNotify('Cart')
    }
    
  }
  const handleWishlist = ()=>{
    
    let matchedItems = wishlistItems.find(item => item.id === cardData.id)
    if(!matchedItems){
      localStorage.setItem(`love ${id}`, true)
      dispatch(wishlistReducer(cardData))
      toastSuccessNotify('Wishlist')
    }
    else{
      localStorage.setItem(`love ${id}`, false)
      toastRemoveNotify('Wishlist')
      dispatch(wishlistRemoveReducer(id))
    }
  }

  return (
    <>
        <div className="mx-auto lg:mx-0 w-67.5">
                      <div className='w-fit h-fit relative overflow-hidden singleCard'>
                        <img src={imgSrc} alt="Flash" onClick={()=>{handleClick()}} />
                        <div className='absolute p-3 top-0 flex justify-between w-full'>
                            <div className='bg-red font-normal text-[12px] flex justify-center items-center w-13.75 h-6.5 rounded-sm text-white'>-{Number(discount)}%</div>
                            <div>
                                <div onClick={handleWishlist} className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center cursor-pointer'>
                                  {love ? <GoHeartFill className="text-pink-500 bg-white text-[24px]" /> : <FaRegHeart  className='text-[23px] font-bold'/>}</div>
                                
                                <div className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center mt-2'><FiEye className='text-[24px] font-bold'/></div>
                            </div>
                        </div>
                            <p onClick={handleCart} className="cursor-pointer font-medium text-[16px] text-white bg-black py-2 text-center absolute w-full transition-all duration-300 -bottom-10">Add To Cart</p>

                      </div>
                      <p className="font-medium text-[16px] mt-4">
                        {title}
                      </p>
                      <p className="mt-2 text-red font-medium text-[16px]">
                        ${Math.round(price-discount*price/100)}
                        <span className="text-black opacity-50 line-through ml-3">
                          ${price}
                        </span>
                      </p>
                      <div className="mt-2 flex gap-x-2">
                        <Rate allowHalf disabled defaultValue={Number(rating)} />
                        <p className="font-semibold text-[14px] opacity-50">({reviews})</p>
                      </div>
        </div>
    </>
  )
}

export default Card