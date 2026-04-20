import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`container m-auto px-5 ${className}`}>
        {children}
    </div>
  )
}

export default Container