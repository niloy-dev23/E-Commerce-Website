import React from 'react'
import Container from '../Components/Container'
import authenticImg from '../assets/authentication.png'
import Flex from '../Components/Flex'
import CommonButton from '../Components/CommonButton'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'

const Login = () => {
  return (
    <>
        <Container className='pt-15 pb-35'>
            <Flex className='gap-32.5 items-center lg:flex-row flex-col'>
                <div>
                    <img src={authenticImg} alt="Sign Up" />
                </div>
                <div className='lg:w-92.75 w-full'>
                    <h1 className='lg:text-[36px] text-[30px] font-inter font-medium mb-6'>Login to Exclusive</h1>
                    <h2 className='mb-12'>Enter your details below</h2>
                    <input type="text" placeholder='Email or Phone Number' className='w-full py-2 outline-0 border-b placeholder:opacity-50 mb-10'/>
                    <input type="text" placeholder='Password' className='w-full py-2 outline-0 border-b placeholder:opacity-50 mb-10'/>
                    <Flex className='justify-between items-center'>
                        <CommonButton className='w-[50%] bg-red text-white' name='Log In'/>
                        <p className='text-red cursor-pointer'>Forget Password?</p>
                    </Flex>
                    <Flex className='items-center gap-4 mt-9 mx-auto w-fit'>
                        <p className='opacity-70'>Don't have an account?</p>
                        <Link to='/signUp' className='pb-1 border-b'>Sign Up</Link>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default Login