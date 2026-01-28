import React, { useState } from "react";
import Container from "./Container";
import myImage from "../assets/Logo.png";
import Flex from "./Flex";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router";

const Navbar = () => {

  const [showBars, setShowBars] = useState(true)

  const handleClick = ()=>{
    setShowBars(!showBars)
  }

  return (
    <>
      <div className="w-full border-b border-b-[#000000]">
        <Container className="py-7">
          <Flex className="justify-between items-center">
            <div>
              <img src={myImage} alt="Logo" />
            </div>
            <Flex className={`${showBars ? 'hidden' : 'flex'} items-center justify-between gap-x-37 lg:flex absolute lg:static flex-col lg:flex-row top-38.5 bg-black lg:bg-[#FFFFFF] z-10 w-full lg:w-fit py-4 lg:py-0`}>
              <ul className="flex gap-5 lg:gap-12 font-normal text-[14px] flex-col lg:flex-row text-white lg:text-black">
                <NavLink to='/'>Home</NavLink>
                <li>Contact</li>
                <NavLink to='/Shop'>Shop</NavLink>
                <li>About</li>
                <li>Sign Up</li>
              </ul>
              <Flex className="gap-5 items-center mt-3 lg:mt-0">
                <Flex className="py-2 px-4 items-center justify-between w-60.75 h-9.5 bg-[#F5F5F5]">
                  <input className="placeholder:font-normal placeholder:text-[14px] placeholder:opacity-50" type="text" placeholder="What are you looking for?" />
                  <HiMagnifyingGlass className="text-[24px]" />
                </Flex>
                <CiHeart className="text-[32px] text-white lg:text-black" />
                <MdOutlineShoppingCart className="text-[32px] text-white lg:text-black" />
                
              </Flex>
              

            </Flex>
            <AiOutlineBars className="text-[32px] lg:hidden block mr-4" onClick={handleClick}/>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
