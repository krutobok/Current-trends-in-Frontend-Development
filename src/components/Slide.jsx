import React from 'react'

const Slide = ({ children, className, id }) => {
  return (
    <div
      id={id}
      className={`snap-start bg-yellow-300 h-screen w-screen text-3xl text-justify  ${className} `}
    >
      {children}
    </div>
  )
}

export default Slide
