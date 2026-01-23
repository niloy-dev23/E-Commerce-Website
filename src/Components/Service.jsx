import React from 'react'

const Service = ({imgSrc, feature, details}) => {
  return (
    <>
        <div className='text-center w-62.25'>
            <img src={imgSrc} alt="Service" className='mx-auto mb-6'/>
            <h2 className='font-semibold text-[20px]'>{feature}</h2>
            <p className='font-normal text-[14px]'>{details}</p>
        </div>
    </>
  )
}

export default Service