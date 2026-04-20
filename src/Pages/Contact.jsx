import React from 'react'
import Container from '../Components/Container'
import SectionHead from '../Components/SectionHead'
import Flex from '../Components/Flex'
import { TiLocation } from 'react-icons/ti'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import CommonButton from '../Components/CommonButton'


const Contact = () => {
  return (
    <>
        <Container className='py-20'>
            <SectionHead
                subtitle='GET IN TOUCH'
                title='CONTACT US'
            />
            <Flex className='gap-10 justify-between flex-col lg:flex-row'>
                <div>
                    <h3 className='text-[19px] font-medium my-4'>Name</h3>
                    <input type="text" placeholder='Type your name' className='px-7 py-5 bg-gray-200 outline-0 rounded-4xl w-full'/>
                    <h3 className='text-[19px] font-medium my-4'>Email</h3>
                    <input type="text" placeholder='example@gmail.com' className='px-7 py-5 bg-gray-200 outline-0 rounded-4xl w-full'/>
                    <h3 className='text-[19px] font-medium my-4'>Message</h3>
                    <textarea rows={4} cols={60} placeholder='Tell your experience or any recommendation' className='px-7 py-5 bg-gray-200 outline-0 rounded-4xl w-full'></textarea>
                    <CommonButton
                        name='Submit'
                        className='bg-red text-white cursor-pointer w-full mt-4'
                    />
                </div>
                <div className='h-67 p-7 bg-gray-200 rounded-4xl'>
                    <h3 className='font-inter font-semibold text-[36px] mb-5'>Our Details</h3>
                    <Flex className='gap-x-3 items-center my-4'>
                        <FaLocationDot className='text-[25px]'/>
                        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    </Flex>
                    <Flex className='gap-x-3 items-center my-4'>
                        <MdEmail className='text-[25px]'/>
                        <p>exclusive@gmail.com</p>
                    </Flex>
                    <Flex className='gap-x-3 items-center my-4'>
                        <IoCallSharp className='text-[25px]'/>
                        <p>+88015-88888-9999</p>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default Contact