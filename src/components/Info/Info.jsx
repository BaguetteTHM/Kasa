import React from 'react'
import EmptyStar from '../../assets/emptyStar.png'
import FullStar from '../../assets/fullStar.png'
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
        {logementObject.rating >= 1 ? 
        <img src={FullStar} alt='full star rating' className='stars'/>
        : <img src={EmptyStar} alt='empty star rating'className='stars'/>}
        {logementObject.rating >= 2 ? 
        <img src={FullStar} alt='full star rating'className='stars'/>
        : <img src={EmptyStar} alt='empty star rating'className='stars'/>}
        {logementObject.rating >= 3 ? 
        <img src={FullStar} alt='full star rating'className='stars'/>
        : <img src={EmptyStar} alt='empty star rating'className='stars'/>}
        {logementObject.rating >= 4 ? 
        <img src={FullStar} alt='full star rating'className='stars'/>
        : <img src={EmptyStar} alt='empty star rating'className='stars'/>}
        {logementObject.rating >= 5 ? 
        <img src={FullStar} alt='full star rating'className='stars'/>
        : <img src={EmptyStar} alt='empty star rating'className='stars'/>}
      </div>

    </div>
    </div>
  )
}
