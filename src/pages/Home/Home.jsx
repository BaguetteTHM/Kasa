import React from 'react'
import bannerImage from '../../assets/bannerImage.png'
import "./Home.css"
import Gallery from '../../components/Gallery/Gallery'

export default function Home() {
  return (
    <>
    <div className='home__body'>
      <div className='banner__container'>
          <img src={bannerImage} alt="home banner" className='home__banner'/>
          <span className='banner__text'>Chez vous, partout et ailleurs</span>
      </div>
      <Gallery/>
    </div>
    </>
  )
}
