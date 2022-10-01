import React from 'react'
import LOGO from '../../assets/logoFooter.png'
import "./Footer.module.css"

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={LOGO} alt="Kasa logo footer" />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>

    </footer>
  )
}
