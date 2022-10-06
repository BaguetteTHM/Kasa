import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Logements } from '../../data/logements'
import "./Logement.css"
import Dropdown from '../../components/Dropdown/Dropdown'
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

        <Dropdown title='Description' modifier="--small">
        {Array.isArray(logementObject.description)?
        <div className={`dropdown__body__text--array`}>
            {logementObject.description.map((e,index)=>(
              <span key={index}>{e}</span>
            ))
            }
        </div>:
        <p className={`dropdown__body__text--small`}>{logementObject.description}</p>
        }
        </Dropdown>
        <Dropdown title='Équipements' description={logementObject.description} modifier="--small">
        {Array.isArray(logementObject.equipments)?
        <div className={`dropdown__body__text--small dropdown__body__text--small--array`}>
            {logementObject.equipments.map((e,index)=>(
              <span key={index}>{e}</span>
            ))
            }
        </div>:
        <p className={`dropdown__body__text--small`}>{logementObject.equipments}</p>
        }
        </Dropdown>
      </div>

    </div>
  )}else{
    return <Navigate to={"*"} replace={true}/>}
  
}
