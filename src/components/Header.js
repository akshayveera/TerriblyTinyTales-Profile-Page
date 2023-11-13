
import React from 'react'
import logo from "../assets/tttlogo.jpg"

const Header = () => {
  return (
    <div 
    className='flex justify-between items-center 
    bg-black 
    py-3 px-5 
    md:px-20 
    md:py-5
    lg:px-36
    lg:py-6'>

        <div 
        className='flex items-center text-white gap-2 px-3.5
        md:gap-5'>

          <img 
          className='h-6 rounded-full bg-white cursor-pointer 
          md:h-10' src={logo} alt="logo of ttt" />
          <span 
          className=' border-l border-yellow-500 
          font-semibold 
          pl-2 py-1 text-[0.7rem] 
          md:text-lg md:pl-5 md:py-2 md:border-l-2' >S T O R I E S</span>          
        </div>

        <div>
          <button 
          className='font-bold bg-yellow-500 
          rounded-lg text-sm 
          px-3 py-2 
          md:text-xl md:px-5'>Courses</button>
        </div>
    </div>
  )
}

export default Header