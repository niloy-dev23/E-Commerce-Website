import React from 'react'
import Container from '../Components/Container'
import CommonButton from '../Components/CommonButton'
import Flex from '../Components/Flex'
import Card from '../Components/Card'
import { useSelector } from 'react-redux'

const Wishlist = () => {

  let wishlistItems = useSelector((state)=>state.allData.wishlist)
  console.log(wishlistItems)
  return (
    <>
        <Container className='pt-20 pb-35'>
          <Flex className='items-center justify-between'>
            <h1 className='text-[20px]'>Wishlist({wishlistItems.length})</h1>
            <CommonButton
              name='Move All To Bag'
              className='bg-transparent text-black outline outline-black'
            />
          </Flex>
          <Flex className='flex-wrap gap-7.5'>
            {wishlistItems.map((item, index) => (
              <Card
                key={index}
                imgSrc={item.thumbnail}
                discount={item.discountPercentage}
                title={item.title}
                price={item.price}
                reviews={item.reviews.length}
                rating={item.rating}
              />
            ))}
          </Flex>
        </Container>
    </>
  )
}

export default Wishlist