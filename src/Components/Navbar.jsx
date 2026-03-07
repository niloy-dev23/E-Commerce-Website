import React, { useState } from "react";
import Container from "./Container";
import myImage from "../assets/Logo.png";
import Flex from "./Flex";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showBars, setShowBars] = useState(true);
  let cartItems = useSelector((state)=>state.allData.cart)
  let wishlistItems = useSelector((state)=>state.allData.wishlist)
  let numberOfItems = cartItems.length
  let numberOfWishlistItems = wishlistItems.length
  let products = useSelector((state)=>state.allData.value)
  const [filteredProducts, setFilterProducts] = useState([])
  // const [value, setValue] = useState("")

  const handleClick = () => {
    setShowBars(!showBars);
  };
  const handleSearch = (e)=>{
    let value = e.target.value
     if(value.trim()===""){
      setFilterProducts([])
     }
     else{
      setFilterProducts(products.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase())))
     }
  }
  let navigate = useNavigate()

  return (
    <>
      <div className="w-full border-b border-b-[#000000]">
        <Container className="py-7">
          <Flex className="justify-between items-center">
            <div>
              <img src={myImage} alt="Logo" />
            </div>
            <Flex
              className={`${showBars ? "hidden" : "flex"} items-center justify-between gap-x-37 lg:flex absolute lg:static flex-col lg:flex-row top-38.5 left-0 bg-black lg:bg-[#FFFFFF] z-10 w-full lg:w-fit py-4 lg:py-0`}
            >
              <ul className="flex gap-5 lg:gap-12 font-normal text-[14px] flex-col lg:flex-row text-white lg:text-black ">
                <li className="relative">
                  <NavLink to="/" className={({ isActive }) => `navItem before:transition-all before:duration-400 ${isActive ? "border-b border-b-black" : "border-none"}`}>Home</NavLink>
                </li>
                <li className="relative">
                  <NavLink to="/about" className={({ isActive }) => `navItem before:transition-all before:duration-400 ${isActive ? "border-b border-b-black" : "border-none"}`}>About</NavLink>
                </li>
                <li className="relative">
                  <NavLink to="/contact" className={({ isActive }) => `navItem before:transition-all before:duration-400 ${isActive ? "border-b border-b-black" : "border-none"}`}>Contact</NavLink>
                </li>
                <li className="relative">
                  <NavLink to="/signUp" className={({ isActive }) => `navItem before:transition-all before:duration-400 ${isActive ? "border-b border-b-black" : "border-none"}`}>Sign Up</NavLink>
                </li>
              </ul>
              <Flex className="gap-5 items-center mt-3 lg:mt-0 ">
                <Flex className="py-1.5 px-4 items-center justify-between w-60.75 h-9.5 relative bg-[#F5F5F5]">
                  <input
                    className="placeholder:font-normal placeholder:text-[14px] placeholder:opacity-50 outline-0 w-[87%]"
                    type="text"
                    placeholder="What are you looking for?"
                    onChange={handleSearch}
                  />
                  <ul className="bg-white text-black absolute top-9.5 w-full left-0">
                    {
                      filteredProducts.map((item,index)=>{
                        return (
                          <li onClick={()=>{navigate(`/productDetails/${item.id}`)}} key={index} className="flex border-b p-3 gap-2 cursor-pointer">
                            <img src={item.thumbnail} alt="Image" className="w-10 h-10" />
                            {item.title}</li>
                        )
                      })
                    }
                  </ul>
                  <HiMagnifyingGlass className="text-[18px]" />
                </Flex>
                <NavLink to='/Wishlist' className="relative">
                    <CiHeart className="text-[32px] text-white lg:text-black" />
                    <span className={`w-4 h-4 flex justify-center items-center text-[12px] rounded-full bg-red text-white absolute -top-1.25 right-0 ${numberOfWishlistItems === 0 ? 'hidden' : ''}`}>{numberOfWishlistItems}</span>
                </NavLink>
                <NavLink to='/CartPage'>
                  <div className="relative">
                    <MdOutlineShoppingCart className="text-[32px] text-white lg:text-black" />
                    <span className={`w-4 h-4 flex justify-center items-center text-[12px] rounded-full bg-red text-white absolute -top-1.25 right-0 ${numberOfItems === 0 ? 'hidden' : ''}`}>{numberOfItems}</span>
                  </div>
                </NavLink>
              </Flex>
            </Flex>
            <AiOutlineBars
              className="text-[32px] lg:hidden block mr-4"
              onClick={handleClick}
            />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
