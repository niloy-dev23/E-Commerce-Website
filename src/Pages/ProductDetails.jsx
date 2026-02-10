import React from 'react'
import Container from '../Components/Container'
import BreadCrump from '../Components/BreadCrump'
import Flex from '../Components/Flex'
import gamepadSmall from '../assets/gamepadSmall.png'
import gamepadBig from '../assets/gamepadBig.png'
import { Rate } from 'antd'

const ProductDetails = () => {
  return (
    <>
        <Container className='pt-20 pb-35'>
            <BreadCrump className='mb-20'/>
            <Flex className='gap-17.5'>
                <Flex className='gap-7.5'>
                    <Flex className='flex-col gap-4'>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                        <img src={gamepadSmall} alt="console" className='w-42.5'/>
                    </Flex>
                    <img src={gamepadBig} alt="console" className='w-125'/>
                </Flex>
                <div className='w-100'>
                    <h1 className='font-inter text-[24px] font-semibold mmb-4'>Havic HV G-92 Gamepad</h1>
                    <Flex className='gap-4 my-4'>
                        <Flex className='gap-2 pr-4 border-r border-r-black'>
                            <Rate allowHalf disabled defaultValue={3} />
                            <p className='text-[14px] text-black opacity-50'>(150 Reviews)</p>
                        </Flex>
                        <p className='text-[14px] text-[#00FF66]'>In Stock</p>
                    </Flex>
                    <p className='text-[14px] w-93.25 pb-6'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <hr />
                    <Flex>
                        <h1>Colours:</h1>
                        <input type="radio" name="Nothing" className='bg-[#A0BCE0] w-20 h-20'/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default ProductDetails