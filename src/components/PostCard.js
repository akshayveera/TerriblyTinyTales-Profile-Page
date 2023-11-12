

import React from 'react';
import Logo from './utils/Logo';
import like from "../assets/like.png";

const PostCard = ({info}) => {

    const {title, text, subText,type, author, date, duration, views, key} = info;
    
  return (
    <div className='flex flex-col gap-5 border-b-2 pt-10 px-6 pb-6'>
        <div className='flex justify-between'>
          <div className='font-bold text-lg'>{title}</div>
          <Logo imgSrc={like} altText={"likes"} style={"bg-yellow-500 h-5"}/>
        </div>
        <div>
            <div className='pb-2 text-sm'>{text}</div>        
            {subText[0] === "" ? "" : ( 
              <>
                {subText.map((item, idx)=>{
                    return (<div className='text-sm' key={idx}>{"- "+ item}</div>)
                })}
              </>             
            )}
        </div>
        <div className='flex justify-between'>
          <div className='font-bold text-gray-500 text-[0.65rem]'>
            <span className='font-bold text-blue-500 text-[0.65rem]'>{type + " "}</span> 
            by 
            <span className='font-bold text-gray-500 text-[0.65rem]'>{" " + author}</span>
          </div>
          <div className='text-gray-400 text-[0.65rem]'>
            {date + " · " + duration + " · " + views} 
          </div>
        </div>
    </div>
  )
}

export default PostCard