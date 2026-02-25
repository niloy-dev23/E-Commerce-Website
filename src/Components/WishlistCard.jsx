import { RiDeleteBin6Line } from "react-icons/ri";
import { Rate } from "antd";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";
import { cartReducer, wishlistRemoveReducer } from "../Redux/Slices/productSlice";


const WishlistCard = ({imgSrc, discount, title,id, price, rating, reviews, cardData}) => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const handleClick = ()=>{
    navigate(`/productDetails/${id}`)
  }
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
  const handleCart = ()=>{
    dispatch(cartReducer(cardData))
    toastSuccessNotify('Cart')
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
  let handleDelete = ()=>{
    toastRemoveNotify('Wishlist')
    dispatch(wishlistRemoveReducer(id))
    localStorage.setItem(`love ${id}`, false)
  }

  return (
    <>
        <div className="mx-auto lg:mx-0 w-67.5">
                      <div className='w-fit h-fit relative overflow-hidden singleCard'>
                        <img src={imgSrc} alt="Flash" onClick={()=>{handleClick()}} />
                        <div className='absolute p-3 top-0 flex justify-between w-full'>
                            <div className='bg-red font-normal text-[12px] flex justify-center items-center w-13.75 h-6.5 rounded-sm text-white'>-{Number(discount)}%</div>
                            <div>
                                <div onClick={handleDelete} className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center cursor-pointer'><RiDeleteBin6Line className='text-[23px] font-bold'/></div>
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

export default WishlistCard