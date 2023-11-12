
import React from 'react'

const Logo = ({imgSrc, altText, style })=>{
    return <img className={"rounded-full p-[2px] "+style} src={imgSrc} alt={altText}/>
}

export default Logo
