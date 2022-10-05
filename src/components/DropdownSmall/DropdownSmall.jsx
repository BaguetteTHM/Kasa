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
    <div className={'dropdownsmall'}>
      <div className='dropdownsmall__button'>
        <span className='dropdownsmall__button__title'>{props.title}</span>
        <span className='dropdownsmall__button__icon'onClick={drop}>{!isOpen ?<img src={arrowDown} alt="arrow down icon to drop" />
        : <img src={arrowUp} alt="arrow up icon to close dropdown" />
        }</span>
      </div>
      {isOpen && 
      <div className='dropdownsmall__body'>
          {Array.isArray(props.description)?
        <div className='dropdownsmall__body__text --array'>
            {props.description.map((e,index)=>(
              <span key={index}>{e}</span>
            ))
            }
        </div>:
        <p className='dropdownsmall__body__text'>{props.description}</p>
        }   
      </div>}
    </div>
  )
}
