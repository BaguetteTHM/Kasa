import React from 'react'
import bannerImage from '../../assets/bannerImage.png'
import "./Home.css"
import { Logements } from '../../logements'
import Card from '../../components/Card/Card'

export default function Home() {
  return (
    <>
    <div className='banner__container'>
        <img src={bannerImage} alt="home banner" className='home__banner'/>
        <span className='banner__text'>Chez vous, partout et ailleurs</span>
    </div>
    <div className='card__background' >
      <div className='card__container'>
        {Logements.map((l) => (
          <Card key= {l.id} logement={l}/>
        ))}

      </div>
    </div>
    </>
  )
}
