import React, { useEffect } from "react";
import Container from "./Container";
import flashSales1 from "../assets/flashSales1.png";
import flashSales2 from "../assets/flashSales2.png";
import flashSales3 from "../assets/flashSales3.png";
import flashSales4 from "../assets/flashSales4.png";
import fiveStar from "../assets/fiveStar.png";
import Slider from "react-slick";
import Card from "./Card";
import SectionHead from "./SectionHead";
import Counter from "./Counter";
import Flex from "./Flex";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CommonButton from "./CommonButton";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cardBufferReducer, categoryReducer, productReducer } from "../Redux/Slices/ProductSlice";

const FlashSales = () => {
    const dispatch = useDispatch()
  
    async function apiFetch(){
     await axios.get('https://dummyjson.com/products')
      .then((product)=>{
        dispatch(productReducer(product.data.products))
        dispatch(categoryReducer(product.data.products))
      });
        dispatch(cardBufferReducer());
      
    }
    useEffect(()=>{
      apiFetch()
    }, [])
  let allProducts = useSelector((state)=>state.allData.value)
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className='hidden w-11.5 h-11.5 absolute -top-20 right-5.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center'
        onClick={onClick}
      ><FaArrowRight className="text-[24px]" /></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className='hidden w-11.5 h-11.5 absolute -top-20 right-20.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center'
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <Container className="mt-10 lg:mt-38.5 pb-15 border-b border-b-black">
        <Flex className='flex-col lg:flex-row items-start lg:items-end gap-5 lg:gap-21.75'>
          <SectionHead
            subtitle="Today's"
            title='Flash Sales'
          />
          <Counter/>
        </Flex>
        <div className="mt-10 slider-container">
          <Slider {...settings} className="flex gap-x-7.5 justify-center">
            {
              allProducts.map((item,index)=>(
                <Card 
                    wishlistData={item}
                    cardData={item}
                    key={index}
                    id={item.id}
                    imgSrc={item.thumbnail}
                    discount={item.discountPercentage}
                    title={item.title}
                    price={item.price}
                    reviews={item.reviews.length}
                    rating={item.rating}
                  />
              ))
            }
          </Slider>
        </div>
        <div className="text-center mt-9.25">
            <CommonButton 
              name='View All Products'
              className='bg-red text-white'
            />
        </div>
      </Container>
    </>
  );
};

export default FlashSales;
