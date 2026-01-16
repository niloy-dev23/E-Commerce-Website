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

const FlashSales = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
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
      <Container className="mt-38.5">
        <Flex className='items-end gap-21.75'>
          <SectionHead
            subtitle="Today's"
            title='Flash Sales'
          />
          <Counter/>
        </Flex>
        <div className="mt-10 slider-container">
          <Slider {...settings} className="flex gap-x-7.5">
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
            <button className="text-white text-[16px] font-medium bg-red px-12 py-3 rounded-sm w-fit">View All Products</button>
        </div>
        <div className="py-50">

        </div>
      </Container>
    </>
  );
};

export default FlashSales;
