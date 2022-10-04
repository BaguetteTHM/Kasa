import React from 'react'
import {ReactComponent as EmptyStar} from '../../assets/emptyStar.svg'
import {ReactComponent as FullStar} from '../../assets/fullStar.svg'
import Tags from '../Tags/Tags'
import "./Info.css"

export default function Info({logementObject}) {
  return (
    <div className='logement__body'>
    <div>
      <h1 className='logement__body__title'>{logementObject.title}</h1>
      <p className='logement__body__location'>{logementObject.location}</p>
      <div className='tags__container'>
        {logementObject.tags.map((t,index) => (
        <Tags key={index} tag={t}/>))}
      </div>
      

    </div>
    <div className='logement__body__info'>
      <div className='logement__body__info__ratings'>
        <div className='host__container'><p className='host__text'>{logementObject.host.name}</p></div>
        <img className='host__img' src={logementObject.host.picture} alt="your host"/>

      </div>
      <div>
        {logementObject.rating >= 1 ? <FullStar/> : <EmptyStar/>}
        {logementObject.rating >= 2 ? <FullStar/> : <EmptyStar/>}
        {logementObject.rating >= 3 ? <FullStar/> : <EmptyStar/>}
        {logementObject.rating >= 4 ? <FullStar/> : <EmptyStar/>}
        {logementObject.rating >= 5 ? <FullStar/> : <EmptyStar/>}
      </div>

    </div>
    </div>
  )
}
