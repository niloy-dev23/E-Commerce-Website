import React from "react";
import Container from "./Container";
import myImage from "../assets/Logo.png";
import Flex from "./Flex";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="w-full border-b border-b-[#000000]">
        <Container className="py-7">
          <Flex className="justify-between items-center">
            <div>
              <img src={myImage} alt="Logo" />
            </div>
            <ul className="flex gap-12 font-normal text-[14px]">
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
            <Flex className="gap-5 items-center">
              <Flex className="py-2 px-4 items-center justify-between w-60.75 h-9.5 bg-[#F5F5F5] ">
                <input className="placeholder:font-normal placeholder:text-[14px] placeholder:opacity-50" type="text" placeholder="What are you looking for?" />
                <HiMagnifyingGlass className="text-[24px]" />
              </Flex>
              <CiHeart className="text-[32px]" />
              <MdOutlineShoppingCart className="text-[32px]" />
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
