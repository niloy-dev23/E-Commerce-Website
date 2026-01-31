import React from 'react'
import { useLocation } from 'react-router';
import Flex from './Flex';

const BreadCrump = ({className}) => {

let location = useLocation();
let webAddress = location.pathname.split('/')[1]
  return (
    <div className={`${className}`}>
        <Flex className='text-[14px] opacity-50 gap-3'>
            <h1>Home</h1>
            <h1>/</h1>
            <h1>{webAddress}</h1>
        </Flex>
    </div>
  )
}

export default BreadCrump