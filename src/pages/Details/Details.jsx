import React from 'react'
import detailBannerImage from '../../assets/detailBannerImage.png'
import NewDropdown from '../../components/NewDropdown/NewDropdown'
import './Details.css'
import { guidelines } from '../../data/guidelines'
import Banner from '../../components/Banner/Banner'

export default function Details() {
  return (
    <>
    <Banner bannerImage={detailBannerImage}/>
    <div className='dropdown__wrapper'>
      {guidelines.map((g) => (
        <NewDropdown key={g.id} title={g.title} description={g.description}/>
      ))}
    </div>
    </>
  )
}
