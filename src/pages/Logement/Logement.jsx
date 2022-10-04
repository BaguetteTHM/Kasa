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
import Info from '../../components/Info/Info'

export default function Logement() {

  const idParams = useParams()
  const ceLogement = Logements.filter(logement => logement.id === idParams.id)
  const logementObject = ceLogement[0]
  return (
    <div className='logement__wrapper'>
      <Slideshow slides={logementObject.pictures}/>
      <Info logementObject={logementObject}/>
      <div className='dropdown__container'>
        <DropdownLeft description={logementObject.description}/>
        <DropdownRight equipments={logementObject.equipments}/>
      </div>

    </div>
  )
}
