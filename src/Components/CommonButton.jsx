import React from 'react'

const CommonButton = ({name, className}) => {
  return (
    <button className={`text-[16px] font-medium px-12 py-3 rounded-sm w-fit cursor-pointer ${className}`}>{name}</button>
  )
}

export default CommonButton