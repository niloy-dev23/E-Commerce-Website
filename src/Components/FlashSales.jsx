import React from "react";
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

const FlashSales = () => {
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
            <Card 
              imgSrc={flashSales1}
              discount='40'
              title='HAVIT HV-G92 Gamepad'
              price='160'
              rating='88'
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
            <Card 
              imgSrc={flashSales4}
              discount='25'
              title='S-Series Comfort Chair'
              price='400'
              rating='99'
            />
            <Card 
              imgSrc={flashSales1}
              discount='40'
              title='HAVIT HV-G92 Gamepad'
              price='160'
              rating='88'
            />
            <Card 
              imgSrc={flashSales2}
              discount='35'
              title='AK-900 Wired Keyboard'
              price='1160'
              rating='75'
            />
          </Slider>
        </div>
        <div className="text-center mt-9.25">
            <CommonButton 
              name='View All Products'
            />
        </div>
      </Container>
    </>
  );
};

export default FlashSales;
