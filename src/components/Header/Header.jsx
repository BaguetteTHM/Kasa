import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/propos">A propos</NavLink></li>
      </ul>
    </nav>
  )
}
