import React from 'react'
import { useParams } from 'react-router-dom'
import { Logements } from '../../logements'
import "./Logement.css"
import Tags from '../../components/Tags/Tags'
import DropdownLeft from '../../components/DropdownLeft/DropdownLeft'
import DropdownRight from '../../components/DropdownRight/DropdownRight'
import Slideshow from '../../components/Slideshow/Slideshow'
import {ReactComponent as EmptyStar} from '../../assets/emptyStar.svg'
import {ReactComponent as FullStar} from '../../assets/fullStar.svg'

export default function Logement() {

  const idParams = useParams()
  const ceLogement = Logements.filter(logement => logement.id === idParams.id)
  const logementObject = ceLogement[0]
  console.log(logementObject.pictures)
  return (
    <div className='logement__wrapper'>
      <Slideshow slides={logementObject.pictures}/>
      <div className='logement__body'>
        <div>
          <h1 className='logement__body__title'>{logementObject.title}</h1>
          <p className='logement__body__location'>{logementObject.location}</p>
          <div className='tags__container'>
            {logementObject.tags.map((t) => (
            <Tags key={t} tag={t}/>))}
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
      <div className='dropdown__container'>
        <DropdownLeft description={logementObject.description}/>
        <DropdownRight equipments={logementObject.equipments}/>
      </div>

    </div>
  )
}
