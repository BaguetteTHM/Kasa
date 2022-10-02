import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export default function Card({logement}) {
    const id = logement.id
    console.log(id)
  return (
    <div className='card'>
        <Link to={id}>
        <img src={logement.cover} alt="card cover" className='card__cover'></img>
        <span className='card__title'>{logement.title}</span>
        </Link>
    </div>
  )
}
