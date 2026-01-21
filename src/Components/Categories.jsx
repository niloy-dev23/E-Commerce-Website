import { CiCamera, CiHeadphones, CiMobile3, CiMonitor } from "react-icons/ci"
import Container from "./Container"
import SectionHead from "./SectionHead"
import { PiWatchLight } from "react-icons/pi"
import { GiConsoleController } from "react-icons/gi"
import Flex from "./Flex"
import Slider from "react-slick"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"


const Categories = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='w-11.5 h-11.5 absolute -top-20 right-5.5 bg-[#F5F5F5] rounded-full flex justify-center items-center'
        onClick={onClick}
      ><FaArrowRight className="text-[24px]" /></div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className='w-11.5 h-11.5 absolute -top-20 right-20.5 bg-[#F5F5F5] rounded-full flex justify-center items-center'
        onClick={onClick}
      ><FaArrowLeft className="text-[24px]" /></div>
    );
  }
var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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
        <Container className='pt-20 pb-17.5 border-b border-b-black'>
            <SectionHead
                subtitle='Categories'
                title='Browse By Category'
            />
            <div className="mt-15 slider-container">
                <Slider {...settings} className="flex justify-between">
                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <CiMobile3 className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">Phone</h3>
                        </div>
                    </Flex>
                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <CiMonitor className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">Computer</h3>
                        </div>
                    </Flex>

                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <PiWatchLight className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">SmartWatch</h3>
                        </div>
                    </Flex>
                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <CiCamera className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">Camera</h3>
                        </div>
                    </Flex>
                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <CiHeadphones className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">Headphones</h3>
                        </div>
                    </Flex>
                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <GiConsoleController className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">Gaming</h3>
                        </div>
                    </Flex>
                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <CiMobile3 className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">Phone</h3>
                        </div>
                    </Flex>
                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <CiMonitor className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">Computer</h3>
                        </div>
                    </Flex>

                    <Flex className="w-42.5 h-36.25 justify-center items-center text-black border border-black rounded-sm hover:bg-red hover:text-white transition duration-500">
                        <div>
                            <PiWatchLight className="text-[56px] text-center w-full" />
                            <h3 className="mt-4 text-center">SmartWatch</h3>
                        </div>
                    </Flex>
                </Slider>
            </div>
        </Container>
    </>
  )
}

export default Categories