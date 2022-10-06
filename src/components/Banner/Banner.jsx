import React from 'react'
import "./Banner.css"

export default function Banner(props) {
  return (
    <div className='banner__container'>
          <img src={props.bannerImage} alt="home banner" className={`banner banner${props.modifier}`}/>
          <span className='banner__text'>{props.text}</span>
      </div>
  )
}
