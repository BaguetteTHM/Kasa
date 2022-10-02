import React from 'react'
import detailBannerImage from '../../assets/detailBannerImage.png'
import Dropdown from '../../components/Dropdown/Dropdown'
import './Details.css'

export default function Details() {
  return (
    <>
    <div className='banner__container'>
        <img src={detailBannerImage} alt="home banner" className='home__banner'/>
    </div>
    <div className='dropdown__wrapper'>
      <Dropdown/>
      <Dropdown/>
      <Dropdown/>
      <Dropdown/>
    </div>
    </>
  )
}
