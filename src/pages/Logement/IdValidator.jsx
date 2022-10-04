import React from 'react'
import { Logements } from '../../data/logements'
import { useParams } from 'react-router-dom'
import Logement from './Logement'
import Error from '../Error/Error'

export default function IdValidator() {
    const idParams = useParams()
    const ceLogement = Logements.filter(logement => logement.id === idParams.id)
    if(ceLogement.length > 0){
  return (
    <Logement/>
  )}else{
    return(
        <Error/>
    )
  }
}
