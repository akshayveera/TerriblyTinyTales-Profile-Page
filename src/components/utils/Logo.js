
import React from 'react'

const Logo = ({imgSrc, altText, style })=>{
    return <img className={"rounded-full"+style} src={imgSrc} alt={altText}/>
}

export default Logo
