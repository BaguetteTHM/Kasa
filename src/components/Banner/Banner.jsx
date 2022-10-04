import React from 'react'

export default function Banner(props) {
  return (
    <div className='banner__container'>
          <img src={props.bannerImage} alt="home banner" className='home__banner'/>
          <span className='banner__text'>{props.text}</span>
      </div>
  )
}
