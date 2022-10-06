import React from 'react'
import detailBannerImage from '../../assets/detailBannerImage.png'
import DropdownSmall from '../../components/DropdownSmall/DropdownSmall'
import './Details.css'
import { guidelines } from '../../data/guidelines'
import Banner from '../../components/Banner/Banner'

export default function Details() {
  return (
    <>
    <Banner bannerImage={detailBannerImage}/>
    <div className='dropdown__wrapper'>
      {guidelines.map((g) => (
        <DropdownSmall key={g.id} title={g.title} modifier="">
          <p className='dropdown__body__text'>{g.description}</p>
        </DropdownSmall>
      ))}
    </div>
    </>
  )
}
