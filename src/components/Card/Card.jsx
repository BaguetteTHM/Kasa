import React from 'react'
import "./Card.css"

export default function Card({logement}) {
  return (
    <div className='card'>
        <img src={logement.cover} alt="card cover" className='card__cover'></img>
        
    </div>
  )
}
