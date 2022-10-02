import React from 'react'
import { useParams } from 'react-router-dom'
import { Logements } from '../../logements'
import dummy from '../../assets/dummybanner.png'
import "./Logement.css"

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
  console.log(ceLogement[0])

  return (
    <div>
      <img src={dummy} alt="a dummy" />
      <div></div>
      <div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}
