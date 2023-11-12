
import React from 'react'
import cover from "../assets/cover.jpg"
import profilePicture from "../assets/profilePicture.jpeg"
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
    <div className='mb-3'>
        <img className='h-36 w-full object-cover object-center' src={cover} alt="cover photo" />

        <div className='flex flex-col mx-5 mt-2'>
          <div className='flex gap-4'>
            <img className='rounded-full border-2 border-white w-24 relative -top-12' src={profilePicture} alt="" />
            
            <div className='flex flex-col gap-2'>
              <div className='flex gap-3'>
                <div className='font-bold'>{name}</div>
                <div className='flex items-center gap-1'>
                  <Logo imgSrc={diamond} altText={"premium"} style={"bg-purple-700 h-3.5"}/>
                  <Logo imgSrc={check} altText={"verified"} style={"bg-green-400 h-3.5"}/>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className=''>
                  <div className=' font-bold text-gray-400 border-2 border-gray-400 py-0.5 px-3 text-center rounded-lg text-sm'>{followers}</div>
                  <div className='w-full text-center text-gray-400 text-[0.6rem] font-bold'>Followers</div>
                </div>
                <div className=''>
                  <div className='font-bold text-gray-400 border-2 border-gray-400 py-0.5 px-4 text-center rounded-lg text-sm'>{following}</div>
                  <div className='w-full text-center text-gray-400 text-[0.6rem] font-bold'>Following</div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='text-[0.8rem]'>
              {bio}
            </div>

            <div className='m-0 p-0'>
              <a className='text-blue-500 text-xs' target='_blank' href={link}>{link}</a>
            </div>

            <div className='flex mt-3 gap-1'>
              <div className='flex gap-1'>
                <Logo imgSrc={fav} altText={"favourites"} style={"bg-blue-500 h-4"}/>
                <span className='font-bold text-xs'>{favs}</span>
              </div>
              <div className='flex gap-1'>
                <Logo imgSrc={like} altText={"likes"} style={"bg-yellow-500 h-4"}/>
                <span className='font-bold text-xs'>{likes}</span>
              </div>
              <div className='flex gap-1'>
                <Logo imgSrc={view} altText={"impressions"} style={"bg-gray-500 h-4"}/>
                <span className='font-bold text-xs'>{views}</span>
              </div>
              <div className='flex gap-1'>
                <Logo imgSrc={heart} altText={"love"} style={"bg-red-500 h-4"}/>
                <span className='font-bold text-xs'>{hearts}</span>
              </div>
            </div>

          </div>

        </div>   
    </div>
  )
}

export default Profile