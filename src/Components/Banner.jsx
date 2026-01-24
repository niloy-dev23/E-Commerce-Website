import React, { useState } from 'react'
import Container from './Container'
import { IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";
import bannerImage from '../assets/BannerImg.jpg';
import Flex from './Flex';
import { RiApps2Fill } from 'react-icons/ri';

const Banner = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [showDiv, setShowDiv] = useState(true)

  let handleClick = ()=>{
    setShowDiv(!showDiv)
  }
  return (
    <>
        <Container className='block lg:flex'>
            <div className='flex lg:hidden gap-x-2 items-center justify-between w-fit mt-4 ml-4' onClick={handleClick}>
                <RiApps2Fill />
                <p>Categories</p>
            </div>
            <ul className={` ${showDiv ? 'hidden' : 'block'} lg:w-54.25 lg:flex flex-col gap-y-4 pr-5.5 border-0 lg:border-r border-black pt-2 lg:pt-10 text-center lg:text-left w-full`}>
                <li className='lg:flex items-center justify-between'>
                    <p>Woman's Fashion</p>
                    <IoIosArrowForward className='hidden lg:block' />
                </li>
                <li className='lg:flex items-center justify-between'>
                    <p>Man's Fashion</p>
                    <IoIosArrowForward className='hidden lg:block' />
                </li>
                <li>Electronics</li>
                <li>Home and Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's and Toys</li>
                <li>Groceries</li>
                <li>Health and Beauty</li>
            </ul>
            <div className='lg:w-223 w-[90%] pt-10 ml-7 lg:ml-12.25 bannerDiv'>
                <Slider {...settings}>
                    <div>
                        <img src={bannerImage} alt="Hello" className='w-full'/>
                    </div>
                    <div>
                        <img src={bannerImage} alt="Hello" className='w-full'/>
                    </div>
                    <div>
                        <img src={bannerImage} alt="Hello" className='w-full'/>
                    </div>
                    <div>
                        <img src={bannerImage} alt="Hello" className='w-full'/>
                    </div>
                    <div>
                        <img src={bannerImage} alt="Hello" className='w-full'/>
                    </div>
                </Slider>
            </div>
        </Container>
    </>
  )
}

export default Banner