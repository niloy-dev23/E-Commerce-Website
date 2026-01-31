import { useEffect, useState } from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { FaCircle } from "react-icons/fa";
import Card from "../Components/Card";
import axios from "axios";
import BreadCrump from "../Components/BreadCrump";


const Shop = () => {

  const [productData, setProductData] = useState([])

  async function apiFetch(){
   await axios.get('https://dummyjson.com/products')
    .then((product)=>{setProductData(product.data.products)})
  }
  useEffect(()=>{
    apiFetch()
  }, [])
  console.log(productData)
  
  
  return (
    <>

      <Container>
        <BreadCrump className='mt-20 mb-12.5'/>
        <Flex className='justify-between flex-col lg:flex-row items-center'>
          <h1 className="font-bold text-[20px] mb-3.75">Shop By Category</h1>
          <p className=''>Show : <select className="border border-[#D9D9D9] py-0.5 px-11 rounded-[5px]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select></p>
        </Flex>  
         <Flex className='justify-between flex-col lg:flex-row'>
           <div className="lg:w-[17%] w-full mx-auto text-center lg:text-left mt-5 lg:mt-0">
              <div>
                <ul className="flex flex-col gap-4">
                  {
                    productData.map((item)=>{
                       return (
                        <li>{item.category}</li>
                       ) 
                    })
                  }
                </ul>
                <h1 className="font-bold text-[20px] mb-3.75 mt-10">Shop By Color</h1>
              </div>
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
              
          <Flex className='flex-wrap gap-7.5 mb-31.5 text-left lg:w-[83%] w-full'>
                {
                  productData.map((item)=>{
                    return (
                      <Card 
                    imgSrc={item.thumbnail}
                    discount={item.discountPercentage}
                    title={item.title}
                    price={item.price}
                    reviews={item.reviews.length}
                    rating={item.rating}
                  />
                    ) 
                  })
                }
                
            
          </Flex>
         </Flex>
      </Container>
    </>
  );
};

export default Shop;
