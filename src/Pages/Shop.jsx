import { use, useEffect, useState } from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { FaCircle } from "react-icons/fa";
import Card from "../Components/Card";
import axios from "axios";
import BreadCrump from "../Components/BreadCrump";
import Paginate from "../Components/Paginate";
import Skeleton from "../Components/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { categoryReducer, productReducer } from "../Redux/Slices/ProductSlice";


const Shop = () => {

  const [productData, setProductData] = useState([])
  const [buffer, setBuffer] = useState(false)
  const [categories, setCategories] = useState([])
  const [pageNumber, setPageNumber] = useState(6)

  const dispatch = useDispatch()

  async function apiFetch(){
   await axios.get('https://dummyjson.com/products')
    .then((product)=>{setProductData(product.data.products); 
      dispatch(productReducer(product.data.products))
      setBuffer(true)})
  }
  useEffect(()=>{
    apiFetch()
  }, [])

  useEffect(()=>{
    let uniqueCategories = [...new Set(productData.map((item)=>(item.category)))]
    setCategories(uniqueCategories)


  }, [productData])

  const categoryClick = (item)=>{
    let categoryItems = productData.filter((categoryItem)=>categoryItem.category == item)
    dispatch(categoryReducer(categoryItems))
  }
  
  
  return (
    <>

      <Container>
        <BreadCrump className='mt-20 mb-12.5'/>
        <Flex className='justify-between flex-col lg:flex-row items-center'>
          <h1 className="font-bold text-[20px] mb-3.75">Shop By Category</h1>
          <p className=''>Show : <select onChange={(item)=>{setPageNumber(item.target.value)}} className="border border-[#D9D9D9] py-0.5 px-11 rounded-[5px]">
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </select></p>
        </Flex>  
         <Flex className='justify-between flex-col lg:flex-row'>
           <div className="lg:w-[17%] w-full mx-auto text-center lg:text-left mt-5 lg:mt-0">
              <div>
                <ul className="flex flex-col gap-4">
                  <li onClick={()=>{dispatch(productReducer(productData))}} className="cursor-pointer capitalize">All Products</li>
                  {
                    categories.map((item, index)=>{
                       return (
                        <li key={index} onClick={()=>{categoryClick(item)}} className="capitalize cursor-pointer">{item}</li>
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
              
          <Flex className='flex-wrap gap-7.5 mb-31.5 text-left lg:w-[83%] w-full lg:ml-24.25'>
            {buffer ? 
            <Paginate itemsPerPage={pageNumber}/>
             : 
            <>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </> 
             }
          </Flex>
         </Flex>
      </Container>
    </>
  );
};

export default Shop;
