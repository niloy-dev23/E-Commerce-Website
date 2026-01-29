import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import BestSellingCard from './BestSellingCard'
import products1 from '../assets/products1.png'
import products2 from '../assets/products2.png'
import products3 from '../assets/products3.png'
import products4 from '../assets/products4.png'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CommonButton from './CommonButton'

const OurProducts = () => {

    function SampleNextArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className='w-11.5 h-11.5 absolute -top-20 right-5.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center hidden'
          onClick={onClick}
        ><FaArrowRight className="text-[24px]" /></div>
      );
    }
  
    function SamplePrevArrow(props) {
      const { className, onClick } = props;
      return (
        <div
          className='w-11.5 h-11.5 absolute -top-20 right-20.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center hidden'
          onClick={onClick}
        ><FaArrowLeft className="text-[24px]" /></div>
      );
    }
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };  
  return (
    <>
        <Container className='mt-17.5 lg:mb-42 mb-7'>
            <SectionHead
                subtitle='Our Products'
                title='Explore Our Products'
            />
            <div className='slider-container mt-15'>
                <Slider {...settings}>
                    <div>
                        <BestSellingCard
                            imgSrc={products1}
                            discountedPrice='100'
                            title='Bread Dry Dog Food'
                            rating='35'
                        />
                        <BestSellingCard
                            imgSrc={products1}
                            discountedPrice='100'
                            title='Bread Dry Dog Food'
                            rating='35'
                            className='mt-15'  
                        />
                    </div>
                    <div>
                        <BestSellingCard
                            imgSrc={products2}
                            discountedPrice='360'
                            title='Bread Dry Dog Food'
                            rating='35'
                        />
                        <BestSellingCard
                            imgSrc={products2}
                            discountedPrice='360'
                            title='Bread Dry Dog Food'
                            rating='35'
                            className='mt-15'
                        />
                    </div>
                    <div>
                        <BestSellingCard
                            imgSrc={products3}
                            discountedPrice='700'
                            title='Bread Dry Dog Food'
                            rating='35'
                        />
                        <BestSellingCard
                            imgSrc={products3}
                            discountedPrice='700'
                            title='Bread Dry Dog Food'
                            rating='35'
                            className='mt-15'
                        />
                    </div>
                    <div>
                        <BestSellingCard
                            imgSrc={products4}
                            discountedPrice='500'
                            title='Bread Dry Dog Food'
                            rating='35'
                        />
                        <BestSellingCard
                            imgSrc={products4}
                            discountedPrice='500'
                            title='Bread Dry Dog Food'
                            rating='35'
                            className='mt-15'
                        />
                    </div>
                    <div>
                        <BestSellingCard
                            imgSrc={products2}
                            discountedPrice='360'
                            title='Bread Dry Dog Food'
                            rating='35'
                        />
                        <BestSellingCard
                            imgSrc={products2}
                            discountedPrice='360'
                            title='Bread Dry Dog Food'
                            rating='35'
                            className='mt-15'
                        />
                    </div>
                </Slider>
            </div>
            <div className='text-center'>
                <CommonButton 
                    name='View All Products'
                    className='text-center mt-15'
                />
            </div>
            
        </Container>
    </>
  )
}

export default OurProducts