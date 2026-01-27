import React from 'react'
import SectionHead from './SectionHead';
import Container from './Container';
import CommonButton from './CommonButton';
import BestSellingCard from './BestSellingCard';
import BestSelling1 from '../assets/BestSelling1.png'
import BestSelling2 from '../assets/BestSelling2.png'
import BestSelling3 from '../assets/BestSelling3.png'
import BestSelling4 from '../assets/BestSelling4.png'
import Slider from 'react-slick';
import Flex from './Flex';

const BestSelling = () => {

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <Container className='pt-5 lg:pt-17.5 mb-5 lg:mb-15'>
      <Flex className='flex-col lg:flex-row gap-8 items-center lg:justify-between'>
        <SectionHead 
         subtitle='This Month'
         title='Best Selling Products'
        />
        <CommonButton
          name='View All'
        />
      </Flex>
      <div className='mt-15'>
        <Slider {...settings} className='slider-container'>
          <BestSellingCard
            imgSrc={BestSelling1}
            normalPrice='$360'
            discountedPrice='260'
            title='The North Coat'
            rating='65'
          />
          <BestSellingCard
            imgSrc={BestSelling2}
            normalPrice='$1160'
            discountedPrice='960'
            title='Gucci Duffle Bag'
            rating='65'
          />
          <BestSellingCard
            imgSrc={BestSelling3}
            normalPrice='$170'
            discountedPrice='160'
            title='RGB Liquid CPU Cooler'
            rating='65'
          />
          <BestSellingCard
            imgSrc={BestSelling4}
            discountedPrice='360'
            title='Small BookSelf'
            rating='65'
          />
          <BestSellingCard
            imgSrc={BestSelling1}
            normalPrice='$360'
            discountedPrice='260'
            title='The North Coat'
            rating='65'
          />
          <BestSellingCard
            imgSrc={BestSelling2}
            normalPrice='$1160'
            discountedPrice='960'
            title='Gucci Duffle Bag'
            rating='65'
          />
          <BestSellingCard
            imgSrc={BestSelling3}
            normalPrice='$170'
            discountedPrice='160'
            title='RGB Liquid CPU Cooler'
            rating='65'
          />
        </Slider>
        
      </div>
    </Container>
    </>
  )
}

export default BestSelling