import React from "react";
import Container from "./Container";
import flashSales1 from "../assets/flashSales1.png";
import flashSales2 from "../assets/flashSales2.png";
import flashSales3 from "../assets/flashSales3.png";
import flashSales4 from "../assets/flashSales4.png";
import fiveStar from "../assets/fiveStar.png";
import Slider from "react-slick";

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
        <div className="flex items-center gap-x-2.5">
          <div className="w-5 h-10 bg-red rounded-sm"></div>
          <p className="text-red text-[16px] font-semibold">Today's</p>
        </div>
        <div className="mt-10 slider-container">
          <Slider {...settings} className="flex gap-x-7.5">
            <div className="w-67.5">
              <img src={flashSales1} alt="Flash" />
              <p className="font-medium text-[16px] mt-4">
                HAVIT HV-G92 Gamepad
              </p>
              <p className="mt-2 text-red font-medium text-[16px]">
                $120{" "}
                <span className="text-black opacity-50 line-through ml-3">
                  $160
                </span>
              </p>
              <div className="mt-2 flex gap-x-2">
                <img src={fiveStar} alt="Stars" />
                <p className="font-semibold text-[14px] opacity-50">(88)</p>
              </div>
            </div>
            <div className="w-67.5">
              <img src={flashSales2} alt="Flash" />
              <p className="font-medium text-[16px] mt-4">
                AK-900 Wired Keyboard
              </p>
              <p className="mt-2 text-red font-medium text-[16px]">
                $960{" "}
                <span className="text-black opacity-50 line-through ml-3">
                  $1160
                </span>
              </p>
              <div className="mt-2 flex gap-x-2">
                <img src={fiveStar} alt="Stars" />
                <p className="font-semibold text-[14px] opacity-50">(75)</p>
              </div>
            </div>
            <div className="w-67.5">
              <img src={flashSales3} alt="Flash" />
              <p className="font-medium text-[16px] mt-4">
                IPS LCD Gaming Monitor
              </p>
              <p className="mt-2 text-red font-medium text-[16px]">
                $370{" "}
                <span className="text-black opacity-50 line-through ml-3">
                  $400
                </span>
              </p>
              <div className="mt-2 flex gap-x-2">
                <img src={fiveStar} alt="Stars" />
                <p className="font-semibold text-[14px] opacity-50">(99)</p>
              </div>
            </div>
            <div className="w-67.5">
              <img src={flashSales4} alt="Flash" />
              <p className="font-medium text-[16px] mt-4">
                S-Series Comfort Chair{" "}
              </p>
              <p className="mt-2 text-red font-medium text-[16px]">
                $375{" "}
                <span className="text-black opacity-50 line-through ml-3">
                  $400
                </span>
              </p>
              <div className="mt-2 flex gap-x-2">
                <img src={fiveStar} alt="Stars" />
                <p className="font-semibold text-[14px] opacity-50">(99)</p>
              </div>
            </div>
            <div className="w-67.5">
              <img src={flashSales1} alt="Flash" />
              <p className="font-medium text-[16px] mt-4">
                HAVIT HV-G92 Gamepad
              </p>
              <p className="mt-2 text-red font-medium text-[16px]">
                $120{" "}
                <span className="text-black opacity-50 line-through ml-3">
                  $160
                </span>
              </p>
              <div className="mt-2 flex gap-x-2">
                <img src={fiveStar} alt="Stars" />
                <p className="font-semibold text-[14px] opacity-50">(88)</p>
              </div>
            </div>
            <div className="w-67.5">
              <img src={flashSales1} alt="Flash" />
              <p className="font-medium text-[16px] mt-4">
                HAVIT HV-G92 Gamepad
              </p>
              <p className="mt-2 text-red font-medium text-[16px]">
                $120{" "}
                <span className="text-black opacity-50 line-through ml-3">
                  $160
                </span>
              </p>
              <div className="mt-2 flex gap-x-2">
                <img src={fiveStar} alt="Stars" />
                <p className="font-semibold text-[14px] opacity-50">(88)</p>
              </div>
            </div>
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
