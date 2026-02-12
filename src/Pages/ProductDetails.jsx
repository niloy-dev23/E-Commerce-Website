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
            <Flex className='gap-10'>
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
                            <p className='text-[14px] w-93.25 pb-6'>{productData.description}</p>
                    <hr />
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default ProductDetails