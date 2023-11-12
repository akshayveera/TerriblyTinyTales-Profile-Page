
import React from 'react'
import cover from "../assets/cover.jpg"
import profilePicture from "../assets/profilePicture.png"
import diamond from "../assets/diamond.png"
import check from "../assets/check.png"
import fav from "../assets/favorites.png"
import like from "../assets/like.png"
import view from "../assets/views.png"
import heart from "../assets/heart.png"
import Logo from './utils/Logo'
import { profileInfo } from '../constants'



const Profile = () => {
  const {name,followers, following, bio, link, favs, likes, views, hearts} = profileInfo;
  return (
    <div className=''>
        <img className='h-40 w-full object-cover object-center sm:h-44 md:h-60' src={cover} alt="cover photo" />

        <div className='flex flex-col mx-8 mt-2 sm:mx-16 sm:mt-4'>
          <div className='flex gap-4 sm:gap-8'>
            <img className='rounded-full border-2 border-white w-24 relative -top-12 sm:w-28 sm:-top-16' src={profilePicture} alt="" />
            
            <div className='flex flex-col gap-2'>
              <div className='flex gap-3'>
                <div className='font-bold sm:text-xl md:text-2xl'>{name}</div>
                <div className='flex items-center gap-1 sm:gap-2'>
                  <Logo imgSrc={diamond} altText={"premium"} style={"bg-purple-700 h-3.5 sm:h-4"}/>
                  <Logo imgSrc={check} altText={"verified"} style={"bg-green-400 h-3.5 sm:h-4"}/>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className=''>
                  <div className=' font-bold text-gray-400 border border-gray-400 py-0.5 px-3 text-center rounded-lg text-sm md:text-lg'>{followers}</div>
                  <div className='w-full text-center text-gray-400 text-[0.6rem] font-semibold md:text-xs'>Followers</div>
                </div>
                <div className=''>
                  <div className='font-bold text-gray-400 border border-gray-400 py-0.5 px-4 text-center rounded-lg text-sm md:text-base'>{following}</div>
                  <div className='w-full text-center text-gray-400 text-[0.6rem] font-semibold md:text-xs'>Following</div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-1 relative -top-2 md:gap-3'>
            <div className='text-[0.95rem] flex flex-col gap-1 sm:text-lg md:text-xl'>
              {bio}
              <a className='text-blue-500 text-[0.85rem] md:text-base' target='_blank' href={link}>{link}</a>
            </div>

            <div className='flex mt-3 gap-4 '>
              <div className='flex gap-2 items-center'>
                <Logo imgSrc={fav} altText={"favourites"} style={"bg-blue-500 h-5 md:h-6"}/>
                <span className='font-bold text-[0.7rem] md:text-base'>{favs}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Logo imgSrc={like} altText={"likes"} style={"bg-yellow-500 h-5 md:h-6"}/>
                <span className='font-bold text-[0.7rem] md:text-base'>{likes}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Logo imgSrc={view} altText={"impressions"} style={"bg-gray-500 h-5 md:h-6"}/>
                <span className='font-bold text-[0.7rem] md:text-base'>{views}</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Logo imgSrc={heart} altText={"love"} style={"bg-red-500 h-5 md:h-6"}/>
                <span className='font-bold text-[0.7rem] md:text-base'>{hearts}</span>
              </div>
            </div>

          </div>

        </div>   
    </div>
  )
}

export default Profile