import React from 'react'

const CommonInput = ({label, required}) => {
  return (
    <>
        <h2 className='opacity-40 mb-2'>{label}<span className={`text-red-500 ${required ? 'inline' : 'hidden'}`}>*</span></h2>
        <input type="text" className='h-12.5 outline-0 p-2.5 bg-[#F5F5F5] w-full mb-8'/>
    </>
  )
}

export default CommonInput