import React from 'react'
import Container from '../Components/Container'
import CommonButton from '../Components/CommonButton'
import Flex from '../Components/Flex'
import { useSelector } from 'react-redux'
import WishlistCard from '../Components/WishlistCard'
import Card from '../Components/Card'
import flashSales1 from "../assets/flashSales1.png";
import flashSales2 from "../assets/flashSales2.png";
import flashSales3 from "../assets/flashSales3.png";
import flashSales4 from "../assets/flashSales4.png";

const Wishlist = () => {

  let wishlistItems = useSelector((state)=>state.allData.wishlist)
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
          <h1 className={`text-[20px] text-center mt-2 ${wishlistItems.length === 0 ? 'block' : 'hidden'}`}>There is no item in your wishlist</h1>
          <Flex className='flex-wrap gap-7.5 mt-15 mb-20'>
            {wishlistItems.map((item, index) => (
              <WishlistCard
                key={index}
                cardData={item}
                id={item.id}
                imgSrc={item.thumbnail}
                discount={item.discountPercentage}
                title={item.title}
                price={item.price}
                reviews={item.reviews.length}
                rating={item.rating}
              />
            ))}
          </Flex>
          <div>
            <Flex className='items-center justify-between mb-15'>
                <Flex className='items-center gap-4'>
                  <div className="w-5 h-10 bg-red rounded-sm"></div>
                  <h1 className='text-[20px]'>Just For You</h1>
                </Flex>
               <CommonButton
                name='See All'
                className='bg-transparent text-black outline outline-black'
              />
            </Flex>
            <Flex className='flex-wrap gap-7.5'>
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
            </Flex>
          </div>
        </Container>
    </>
  )
}

export default Wishlist