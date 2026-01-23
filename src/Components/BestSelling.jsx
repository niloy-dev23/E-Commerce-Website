import React from 'react'
import SectionHead from './SectionHead';
import Container from './Container';
import CommonButton from './CommonButton';
import BestSellingCard from './BestSellingCard';
import BestSelling1 from '../assets/BestSelling1.png'
import BestSelling2 from '../assets/BestSelling2.png'
import BestSelling3 from '../assets/BestSelling3.png'
import BestSelling4 from '../assets/BestSelling4.png'

const BestSelling = () => {
  return (
    <>
    <Container className='pt-17.5 mb-15'>
      <div className='flex justify-between items-end'>
        <SectionHead 
         subtitle='This Month'
         title='Best Selling Products'
        />
        <CommonButton
          name='View All'
        />
      </div>
      <div className='flex justify-between mt-15'>
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
      </div>
    </Container>
    </>
  )
}

export default BestSelling