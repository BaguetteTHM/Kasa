import React from 'react'
import "./Error.css"
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error__container'>
      <span className='error__number'>404</span>
      <p className='error__message'>Oups! La page que vous demandez n'existe pas.</p>
      <p  className='error__link'> <Link to='/'> Retourner sur la page d’accueil</Link></p>

    </div>
  )
}
