
import React from 'react'
import PostCard from './PostCard'
import { postCardInfo } from '../constants'
import Logo from './utils/Logo'

const Posts = () => {
    const info = postCardInfo.data;
    console.log(info);
  return (
    <div className='mx-36'>
        <div className='flex'>
            <div className='text-blue-500 font-bold text-2xl w-48 text-center border-t-2 pb-1.5 pt-3 px-4 border-r-2 rounded-tr-lg '>134 Posts</div>
            <div className='w-full border-b-2 border-l-2 rounded-bl-lg relative -bottom-2 -left-0.5'></div>
        </div>
        {info.map((data)=>{
            return (<PostCard key={data?.key} info={data} />)
        })}        
    </div>
  )
}

export default Posts