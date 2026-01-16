import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time'; 
import Flex from './Flex';

const Counter = () => {

const conduct_date = '2026-01-18 16:54:00';

const [time, setTime] = useState({})

useEffect(()=>{
    setInterval(()=>{
        const countDown = countDownDateAndTime(conduct_date);
        setTime(countDown)
    }, 1000)
}, [])

  return (
    <>
        <Flex className='items-center gap-x-2'>
            <Flex className='items-center gap-x-4.25'>
                <div>
                    <h2 className='font-medium text-[12px]'>Days</h2>
                    <h1 className='font-inter font-bold text-[32px]'>{time.days}</h1>
                </div>
                <p className='text-red text-3xl'>:</p>
            </Flex>
            <Flex className='items-center gap-x-4.25'>
                <div>
                    <h2 className='font-medium text-[12px]'>Hours</h2>
                    <h1 className='font-inter font-bold text-[32px]'>{time.hours}</h1>
                </div>
                <p className='text-red text-3xl'>:</p>
            </Flex>
            <Flex className='items-center gap-x-4.25'>
                <div>
                    <h2 className='font-medium text-[12px]'>Minutes</h2>
                    <h1 className='font-inter font-bold text-[32px]'>{time.minutes}</h1>
                </div>
                <p className='text-red text-3xl'>:</p>
            </Flex>
            <Flex className='items-center gap-x-4.25'>
                <div>
                    <h2 className='font-medium text-[12px]'>Seconds</h2>
                    <h1 className='font-inter font-bold text-[32px]'>{time.seconds}</h1>
                </div>
            </Flex>
        </Flex>
    </>
  )
}

export default Counter