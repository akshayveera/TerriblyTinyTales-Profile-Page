

import React from 'react';
import Logo from './utils/Logo';
import like from "../assets/like.png";

const PostCard = ({info}) => {

    const {title, text, subText,type, author, date, duration, views, key} = info;
    
  return (
    <div className='flex flex-col gap-5 border-b-2 pt-20 px-12 pb-10'>
        <div className='flex justify-between'>
          <div className='text-2xl font-bold'>{title}</div>
          <Logo imgSrc={like} altText={"likes"} style={"bg-yellow-500"}/>
        </div>
        <div>
            <div className='pb-2 text-lg'>{text}</div>        
            {subText[0] === ""?"": ( 
              <>
                {subText.map((item, idx)=>{
                    return (<div className='text-lg' key={idx}>{"- "+ item}</div>)
                })}
              </>             
            )}
        </div>
        <div className='flex justify-between'>
          <div className='font-bold text-gray-500'>
            <span className='font-bold text-blue-500'>{type + " "}</span> 
            by 
            <span className='font-bold text-gray-500'>{" " + author}</span>
          </div>
          <div className='text-gray-400'>
            {date + " · " + duration + " · " + views} 
          </div>
        </div>
    </div>
  )
}

export default PostCard