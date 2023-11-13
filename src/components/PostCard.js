

import React from 'react';
import Logo from './utils/Logo';
import like from "../assets/like.png";

const PostCard = ({info}) => {

    const {title, text, subText,type, author, date, duration, views, key} = info;
    
  return (
    <div 
    className='flex flex-col gap-5 border-b-2 pt-10 px-6 pb-6 
    sm:px-16 
    md:px-28 md:pt-14 md:pb-10 
    lg:px-40 lg:pt-20 lg:pb-14'>
      
        <div className='flex justify-between'>
          <div className='font-bold sm:text-lg md:text-2xl'>{title}</div>
          <Logo imgSrc={like} altText={"likes"} style={"bg-yellow-500 h-5 md:h-6 "}/>
        </div>
        <div>
            <div className='pb-2 text-sm md:text-lg'>{text}</div>        
            {subText[0] === "" ? "" : ( 
              <>
                {subText.map((item, idx)=>{
                    return (<div className='text-sm md:text-lg' key={idx}>{"- "+ item}</div>)
                })}
              </>             
            )}
        </div>
        <div className='flex justify-between'>
          <div className='font-bold text-gray-500 text-[0.65rem] md:text-base'>
            <span className='font-bold text-blue-500 text-[0.65rem] md:text-base'>{type + " "}</span> 
            by 
            <span className='font-bold text-gray-500 text-[0.65rem] md:text-base'>{" " + author}</span>
          </div>
          <div className='text-gray-400 text-[0.65rem] md:text-base'>
            {date + " · " + duration + " · " + views} 
          </div>
        </div>
    </div>
  )
}

export default PostCard