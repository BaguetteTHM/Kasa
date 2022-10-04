import React from 'react'
import detailBannerImage from '../../assets/detailBannerImage.png'
import Dropdown from '../../components/Dropdown/Dropdown'
import './Details.css'
import { guidelines } from '../../data/guidelines'
import Banner from '../../components/Banner/Banner'

export default function Details() {
  return (
    <>
    <Banner bannerImage={detailBannerImage}/>
    <div className='dropdown__wrapper'>
      {guidelines.map((g) => (
        <Dropdown key={g.id} guideline={g}/>
      ))}
    </div>
    </>
  )
}
