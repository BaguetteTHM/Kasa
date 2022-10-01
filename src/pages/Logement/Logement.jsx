import React from 'react'
import { useParams } from 'react-router-dom'
import { Logements } from '../../logements'

export default function Logement() {
  // const characters = [
  //   { name: 'Batman', team: 'Justice League' },
  //   { name: 'Hulk', team: 'Avengers' },
  //   { name: 'Flash', team: 'Justice League' },
  //   { name: 'Iron Man', team: 'Avengers' },
  //   { name: 'Deadpool', team: 'X-Force' }
  // ];
  // const avengers = characters.filter(character => character.team === 'Avengers');
  // console.log(avengers)

  const idParams = useParams()
  const ceLogement = Logements.filter(logement => logement.id === idParams.id)
  console.log(ceLogement)

  return (
    <span>Ici s'affichera la page de ce logement : {ceLogement.title}</span>
  )
}
