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
                <div>
                    <h1 className='font-inter text-[24px] font-semibold mmb-4'>Havic HV G-92 Gamepad</h1>
                    <Flex>
                        
                    </Flex>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default ProductDetails