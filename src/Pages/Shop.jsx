import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { FaCircle } from "react-icons/fa";
import Card from "../Components/Card";
import BestSellingCard from '../Components/BestSellingCard';
import flashSales2 from "../assets/flashSales2.png";
import flashSales3 from "../assets/flashSales3.png";
import BestSelling3 from '../assets/BestSelling3.png'

const Shop = () => {
  return (
    <>
      <Container className="lg:mt-37.75 mt-9">
        <Flex className='flex-col lg:flex-row text-center lg:text-left'>
          <div className="lg:w-[60%] w-full">
            <h1 className="font-bold text-[20px] mb-3.75">Shop By Category</h1>
            <ul className="flex flex-col gap-4">
              <li>Woman's Fashion</li>
              <li>Man's Fashion</li>
              <li>Electronics</li>
              <li>Home and Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's and Toys</li>
              <li>Groceries</li>
              <li>Health and Beauty</li>
            </ul>
            <h1 className="font-bold text-[20px] mb-3.75 mt-10">Shop By Color</h1>
            <Flex className='flex-col gap-4.5 w-fit mx-auto lg:m-0'>
                <Flex className='items-center gap-3'>
                  <FaCircle className="text-[11px] text-black"/>
                  <p>Color 1</p>
                </Flex>
                <Flex className='items-center gap-3'>
                  <FaCircle className="text-[11px] text-red"/>
                  <p>Color 2</p>
                </Flex>
                <Flex className='items-center gap-3'>
                  <FaCircle className="text-[11px] text-green-500"/>
                  <p>Color 3</p>
                </Flex>
            </Flex>
          </div>
          <div >
            <p className='lg:text-right mb-7.5 ml-24 mt-7 lg:mt-0 text-center'>Show : <select className="border border-[#D9D9D9] py-0.5 px-11 rounded-[5px]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select></p>
            <Flex className='flex-wrap gap-7.5 mb-31.5 text-left'>
              <Card 
                imgSrc={flashSales2}
                discount='35'
                title='AK-900 Wired Keyboard'
                price='1160'
                rating='75'
              />
              <Card 
                imgSrc={flashSales3}
                discount='30'
                title='IPS LCD Gaming Monitor'
                price='400'
                rating='99'
              />
              <BestSellingCard
                imgSrc={BestSelling3}
                normalPrice='$170'
                discountedPrice='160'
                title='RGB Liquid CPU Cooler'
                rating='65'
              />
              <Card 
                imgSrc={flashSales2}
                discount='35'
                title='AK-900 Wired Keyboard'
                price='1160'
                rating='75'
              />
              <Card 
                imgSrc={flashSales3}
                discount='30'
                title='IPS LCD Gaming Monitor'
                price='400'
                rating='99'
              />
              <BestSellingCard
                imgSrc={BestSelling3}
                normalPrice='$170'
                discountedPrice='160'
                title='RGB Liquid CPU Cooler'
                rating='65'
              />
              <Card 
                imgSrc={flashSales2}
                discount='35'
                title='AK-900 Wired Keyboard'
                price='1160'
                rating='75'
              />
              <Card 
                imgSrc={flashSales3}
                discount='30'
                title='IPS LCD Gaming Monitor'
                price='400'
                rating='99'
              />
              <BestSellingCard
                imgSrc={BestSelling3}
                normalPrice='$170'
                discountedPrice='160'
                title='RGB Liquid CPU Cooler'
                rating='65'
              />
            </Flex>  
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop;
