import React from 'react'
import "./Gallery.css"
import Card from '../../components/Card/Card'
import { Logements } from '../../data/logements'

export default function Gallery() {
  return (
    
    <div className='card__container'>
      {Logements.map((l) => (
        <Card key= {l.id} logement={l}/>
      ))}

    </div>
     
  )
}
