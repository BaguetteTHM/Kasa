import React from 'react'
import "./DropdownSmall.css"
import { useState } from 'react'
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'

export default function NewDropdown(props) {

    const [isOpen,setOpen]= useState(false)
    const drop = () =>{
      setOpen(!isOpen)
    }

  return (
    <div className={`dropdown${props.modifier}`}>
      <div className={`dropdown__button${props.modifier}`}>
        <span className={`dropdown__button__title${props.modifier}`}>{props.title}</span>
        <span className={`dropdown__button__icon${props.modifier}`}onClick={drop}>{!isOpen ?<img src={arrowDown} alt="arrow down icon to drop" />
        : <img src={arrowUp} alt="arrow up icon to close dropdown" />
        }</span>
      </div>
      {isOpen && 
      <div className={`dropdown__body${props.modifier}`}>
          {props.children}   
      </div>}
    </div>
  )
}
