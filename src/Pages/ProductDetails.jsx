import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import BreadCrump from '../Components/BreadCrump'
import Flex from '../Components/Flex'
import gamepadSmall from '../assets/gamepadSmall.png'
import gamepadBig from '../assets/gamepadBig.png'
import { Rate } from 'antd'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import SkeletonImage from '../Components/SkeletonImage'
import SkeletonBigImage from '../Components/SkeletonBigImage'
import SkeletonText from '../Components/SkeletonText'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { FiMinus, FiPlus, FiTruck } from 'react-icons/fi'
import CommonButton from '../Components/CommonButton'
import { IoMdHeartEmpty } from 'react-icons/io'
import { FaRotate } from 'react-icons/fa6'
import SectionHead from '../Components/SectionHead'
import flashSales1 from "../assets/flashSales1.png";
import flashSales2 from "../assets/flashSales2.png";
import flashSales3 from "../assets/flashSales3.png";
import flashSales4 from "../assets/flashSales4.png";
import Card from './../Components/Card';
import { Bounce, toast } from 'react-toastify'

const ProductDetails = () => {
  const [productData, setProductData] = useState([])
  const [buffer, setBuffer] = useState(false)
  const [categories, setCategories] = useState([])
  const [pageNumber, setPageNumber] = useState(6)
  const [images, setImages] = useState([])
  const [rating, setRating] = useState(1)
  const [reviewNumber, setReviewNumber] = useState([])

  const dispatch = useDispatch()
    let params = useParams()
    let id = params.id
  async function apiFetch(){
   await axios.get(`https://dummyjson.com/products/${id}`)
    .then((product)=>{setProductData(product.data); 
      setBuffer(true)
    setImages(product.data.images)
setRating(product.data.rating)
setReviewNumber(product.data.reviews)
})
  }
  useEffect(()=>{
    apiFetch()
  }, [])
  console.log(productData);
  
  return (
    <>
        <Container className='pt-20 pb-35'>
            <BreadCrump className='mb-20'/>
            <Flex className='gap-10 pb-35'>
                <Flex className='gap-7.5'>
                    <Flex className='flex-col gap-6'>
                        {
                            buffer ?
                            images.map((item, idx)=>{
                                return (
                                    <img key={idx} src={item} alt="console" className='w-42.5 h-46'/>
                                )
                            })
                            :
                            <>
                                <SkeletonImage/>
                                <SkeletonImage/>
                                <SkeletonImage/>
                            </>
                        }
                        
                    </Flex>
                    {
                        buffer ? 
                        <img src={productData.thumbnail} alt="console" className='w-125 h-150'/>
                        :
                        <SkeletonBigImage/>
                    }
                </Flex>
                <div className='w-100'>
                            <h1 className='font-inter text-[24px] font-semibold mmb-4'>{productData.title}</h1>
                            <Flex className='gap-4 my-4'>
                                <Flex className='gap-2 pr-4 border-r border-r-black'>
                                    <Rate allowHalf disabled value={rating} />
                                    <p className='text-[14px] text-black opacity-50'>({reviewNumber.length} Reviews)</p>
                                </Flex>
                                <p className='text-[14px] text-[#00FF66]'>{productData.availabilityStatus}</p>
                            </Flex>
                            <h1 className='font-inter text-[24px] mt-4 mb-5'>${productData.price}</h1>
                            <p className='text-[14px] w-93.25 pb-6'>{productData.description}</p>
                    <hr />
                    <Flex className='mt-6 gap-6 items-center'>
                        <h1 className='font-inter text-[20px]'>Colours: </h1>
                        <Flex className='gap-2'>
                            <div className='w-5 h-5 bg-[#A0BCE0] rounded-full'></div>
                            <div className='w-5 h-5 bg-red rounded-full'></div>
                        </Flex>
                    </Flex>
                    <Flex className='mt-6 gap-6 items-center'>
                        <h1 className='font-inter text-[20px]'>Sizes: </h1>
                        <Flex className='gap-4'>
                            <Flex className='w-8 h-8 items-center justify-center border border-black rounded-sm hover:bg-red hover:text-white transition-all duration-300 cursor-pointer'>
                                <h1 className='font-medium text-[14px]'>XS</h1>
                            </Flex>
                            <Flex className='w-8 h-8 items-center justify-center border border-black rounded-sm hover:bg-red hover:text-white transition-all duration-300 cursor-pointer'>
                                <h1 className='font-medium text-[14px]'>S</h1>
                            </Flex>
                            <Flex className='w-8 h-8 items-center justify-center border border-black rounded-sm hover:bg-red hover:text-white transition-all duration-300 cursor-pointer'>
                                <h1 className='font-medium text-[14px]'>M</h1>
                            </Flex>
                            <Flex className='w-8 h-8 items-center justify-center border border-black rounded-sm hover:bg-red hover:text-white transition-all duration-300 cursor-pointer'>
                                <h1 className='font-medium text-[14px]'>L</h1>
                            </Flex>
                            <Flex className='w-8 h-8 items-center justify-center border border-black rounded-sm hover:bg-red hover:text-white transition-all duration-300 cursor-pointer'>
                                <h1 className='font-medium text-[14px]'>XL</h1>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className='mt-6 h-11 gap-4'>
                        <Flex className='w-39.75 rounded-sm outline outline-black overflow-hidden'>
                            <FiMinus className='font-thin text-[40px] text-black px-2 h-11 border-r-0' />
                            <span className='px-8.5 py-2 font-medium text-[20px] border-x border-black'>2</span>
                            <FiPlus className='font-thin text-[40px] px-2 h-11 bg-red text-white' />
                        </Flex>
                        <CommonButton
                            name='Buy Now'
                            className='h-full'
                        />
                        <IoMdHeartEmpty className='text-[44px] p-1 border border-black rounded-sm' />
                    </Flex>
                     <div className='w-full border border-black mt-10'>
                        <Flex className='py-4 px-6 gap-4 items-center pb-4'>
                            <FiTruck className='text-[40px]' />
                            <div>
                                <h1 className='font-medium text-[16px]'>Free Delivery</h1>
                                <p className='font-medium text-[12px] underline mt-2'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </Flex>
                        <hr/>
                        <Flex className='gap-4 py-4 px-6 items-center pt-4'>
                            <FaRotate className='text-[40px]' />
                            <div>
                                <h1 className='font-medium text-[16px]'>Return Delivery</h1>
                                <p className='font-medium text-[12px] mt-2'>Free 30 Day Delivery Returns. <span className='underline'>Details</span></p>
                            </div>
                        </Flex>
                     </div>
                </div>
            </Flex>
            <SectionHead 
                subtitle='Related Items'
            />
            <Flex className='mt-15 w-full justify-between'>
                <Card 
                imgSrc={flashSales1}
                discount='40'
                title='HAVIT HV-G92 Gamepad'
                price='160'
                rating='4.2'
                reviews='88'
                />
                <Card 
                imgSrc={flashSales2}
                discount='35'
                title='AK-900 Wired Keyboard'
                price='1160'
                rating='4.2'
                reviews='88'
                />
                <Card 
                imgSrc={flashSales3}
                discount='30'
                title='IPS LCD Gaming Monitor'
                price='400'
                rating='4.2'
                reviews='88'
                />
                <Card 
                imgSrc={flashSales4}
                discount='25'
                title='S-Series Comfort Chair'
                price='400'
                rating='4.2'
                reviews='88'
                />
            </Flex>
        </Container>
    </>
  )
}

export default ProductDetails