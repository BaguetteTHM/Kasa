import React from 'react'
import bannerImage from '../../assets/bannerImage.png'
import "./Home.css"
import Gallery from '../../components/Gallery/Gallery'
import Banner from '../../components/Banner/Banner'

export default function Home() {
  return (
    <>
    <div className='home__body'>
      <Banner bannerImage={bannerImage} text="Chez vous, partout et ailleurs" modifier="--home"/>
      <Gallery/>
    </div>
    </>
  )
}
