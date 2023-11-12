
import React from 'react'
import logo from "../assets/tttlogo.jpg"

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-black py-3 px-5'>
        <div className='flex items-center text-white gap-2'>
          <img className='h-6 rounded-full bg-white cursor-pointer' src={logo} alt="logo of ttt" />
          <span className=' border-l border-yellow-500 font-semibold pl-2 py-1 text-[0.7rem]' >S T O R I E S</span>          
        </div>
        <div>
          <button className='font-bold bg-yellow-500 rounded-lg text-sm px-3 py-2'>Courses</button>
        </div>
    </div>
  )
}

export default Header