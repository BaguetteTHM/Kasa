import React from 'react'
import LOGO from '../../assets/logoFooter.png'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <img src={LOGO} alt="Kasa logo footer" className='Logo' />
        <h2>© 2020 Kasa. All rights reserved</h2>
      </div>

    </footer>
  )
}
