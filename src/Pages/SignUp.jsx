import React from 'react'
import Container from '../Components/Container'
import authenticImg from '../assets/authentication.png'
import Flex from '../Components/Flex'
import CommonButton from '../Components/CommonButton'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'

const SignUp = () => {
  return (
    <>
        <Container className='pt-15 pb-35'>
            <Flex className='gap-32.5 items-center flex-col lg:flex-row'>
                <div>
                    <img src={authenticImg} alt="Sign Up" />
                </div>
                <div className='lg:w-92.75 w-full'>
                    <h1 className='lg:text-[36px] text-[30px] font-inter font-medium mb-6'>Create an account</h1>
                    <h2 className='mb-12'>Enter your details below</h2>
                    <input type="text" placeholder='Name' className='w-full py-2 outline-0 border-b placeholder:opacity-50 mb-10'/>
                    <input type="text" placeholder='Email or Phone Number' className='w-full py-2 outline-0 border-b placeholder:opacity-50 mb-10'/>
                    <input type="text" placeholder='Password' className='w-full py-2 outline-0 border-b placeholder:opacity-50 mb-10'/>
                    <CommonButton className='w-full bg-red text-white mb-4' name='Create Account'/>
                    <button className='text-[16px] font-medium px-12 py-3 rounded-sm w-full border '>
                        <div className='flex items-center gap-4'>
                            <FcGoogle className='text-[24px] lg:ml-7 ml-1'/>
                            <p>Sign up with Google</p> 
                        </div>
                    </button>
                    <Flex className='items-center gap-4 mt-9 mx-auto w-fit'>
                        <p className='opacity-70'>Already have account?</p>
                        <Link to='/login' className='pb-1 border-b'>Log in</Link>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default SignUp