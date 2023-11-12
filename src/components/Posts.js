
import React from 'react'
import PostCard from './PostCard'
import { postCardInfo } from '../constants'
import Logo from './utils/Logo'

const Posts = () => {
    const info = postCardInfo.data;
    console.log(info);
  return (
    <div className='mt-10'>
        <div className='flex'>
            <div className='text-blue-500 font-bold text-center border-t-2 border-r-2 rounded-tr-lg w-44 pt-2 pl-1'>134 Posts</div>
            <div className='w-full border-b-2 border-l-2 rounded-bl-lg relative -bottom-2 -left-0.5'></div>
        </div>
        {info.map((data)=>{
            return (<PostCard key={data?.key} info={data} />)
        })}        
    </div>
  )
}

export default Posts