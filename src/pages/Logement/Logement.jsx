import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Logements } from '../../data/logements'
import "./Logement.css"
import DropdownSmall from '../../components/DropdownSmall/DropdownSmall'
import Slideshow from '../../components/Slideshow/Slideshow'
import Info from '../../components/Info/Info'

export default function Logement() {

  const idParams = useParams()
  const ceLogement = Logements.filter(logement => logement.id === idParams.id)
  
  const logementObject = ceLogement[0]
  if(ceLogement.length>0){
  return (
    <div className='logement__wrapper'>
      <Slideshow slides={logementObject.pictures}/>
      <Info logementObject={logementObject}/>
      <div className='dropdown__container'>
        <DropdownSmall title='Description' description={logementObject.description}/>
        <DropdownSmall title='Équipements' description={logementObject.equipments}/>
      </div>

    </div>
  )}else{
    return <Navigate to={"*"} replace={true}/>}
  
}
