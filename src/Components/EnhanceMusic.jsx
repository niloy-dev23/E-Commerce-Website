import React from 'react'
import Container from './Container'
import MusicCounter from './MusicCounter'
import MusicImage from '../assets/Music.png'
import Elipse from '../assets/Ellipse.png'
import Flex from './Flex'

const EnhanceMusic = () => {
  return (
    <>
        <Container className='bg-black px-14 py-17.5 mt-35 relative'>
            <Flex className='justify-between items-center'>
              <div>
                <div>
                  <h1 className='font-semibold text-[16px] text-[#00FF66]'>Categories</h1>
                  <h2 className='w-110.75 font-inter font-semibold text-[49px] mt-8 text-white'>Enhance Your Music Experience</h2>
                </div>
                <MusicCounter/>
                <button className='py-4 px-12 bg-[#00FF66] font-medium text-white rounded-sm'>Buy    Now!</button>
              </div>
              <div className='absolute top-0 right-10'>
                <div className='relative w-fit h-fit'>
               <img src={Elipse} alt="JBL" className='w-160 h-125'/>
               <div className='w-fit h-fit absolute top-20 -right-10'>
                <img src={MusicImage} alt="Circle" className='rounded-full'/>
               </div>
              </div>
              </div>
            </Flex>
        </Container>
    </>
  )
}

export default EnhanceMusic