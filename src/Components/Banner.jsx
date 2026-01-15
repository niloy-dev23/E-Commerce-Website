import React from 'react'
import Container from './Container'
import { IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";
import bannerImage from '../assets/BannerImg.jpg';

const Banner = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
        <Container className='flex'>
            <ul className='w-54.25 flex flex-col gap-y-4 pr-5.5 border-r border-black pt-10'>
                <li className='flex items-center justify-between'>
                    <p>Woman's Fashion</p>
                    <IoIosArrowForward />
                </li>
                <li className='flex items-center justify-between'>
                    <p>Man's Fashion</p>
                    <IoIosArrowForward />
                </li>
                <li>Electronics</li>
                <li>Home and Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's and Toys</li>
                <li>Groceries</li>
                <li>Health and Beauty</li>
            </ul>
            <div className='w-223 pt-10 ml-12.25 bannerDiv'>
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