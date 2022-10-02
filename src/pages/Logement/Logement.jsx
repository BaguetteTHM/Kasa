import React from 'react'
import { useParams } from 'react-router-dom'
import { Logements } from '../../logements'
import dummy from '../../assets/dummybanner.png'
import "./Logement.css"
import Tags from '../../components/Tags/Tags'
import DropdownLeft from '../../components/DropdownLeft/DropdownLeft'
import DropdownRight from '../../components/DropdownRight/DropdownRight'

export default function Logement() {

  const idParams = useParams()
  const ceLogement = Logements.filter(logement => logement.id === idParams.id)
  const logementObject = ceLogement[0]
  console.log(logementObject.tags)
  return (
    <div className='logement__wrapper'>
      <img src={dummy} alt="a dummy" />
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
            <span>{logementObject.rating}</span>
          </div>

        </div>

      </div>
      <div className='dropdown__container'>
        <DropdownLeft/>
        <DropdownRight/>
      </div>

    </div>
  )
}
