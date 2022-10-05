import React from 'react'
import { useState } from 'react'
import './Dropdown.css'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'

export default function Dropdown({guideline}) {

  const [isOpen,setOpen]= useState(false)
  const drop = () =>{
    setOpen(!isOpen)
  }

  return (
    <div className='dropdown'>
      <div className='dropdown__button'>
        <span className='dropdown__button__title'>{guideline.title}</span>
        <span className='dropdown__button__icon'onClick={drop}>{!isOpen ?<img src={arrowDown} alt="arrow down icon to drop" />
        : <img src={arrowUp} alt="arrow up icon to close dropdown" />
        }</span>
      </div>
      {isOpen && 
      <div className='dropdown__body'>
        <p className='dropdown__body__text'>{guideline.description}</p>
      </div>}
    </div>
  )
}
