import React from 'react'
import "./DropdownLeft.css"
import { useState } from 'react'

export default function DropdownLeft({description}) {

    const [isOpen,setOpen]= useState(false)
    const drop = () =>{
      setOpen(!isOpen)
    }

  return (
    <div className='dropdownleft'>
      <div className='dropdownleft__button'>
        <span className='dropdownleft__button__title'>Description</span>
        <span className='dropdownleft__button__icon'onClick={drop}>{!isOpen ?<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66344 0.85955L0.530518 3.00468L12.4604 14.9234L24.3903 2.99263L22.2574 0.85955L12.4604 10.6572L2.66344 0.85955Z" fill="white"/>
        </svg>
        : <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z" fill="white"/></svg>
        }</span>
      </div>
      {isOpen && 
      <div className='dropdownleft__body'>
        <p className='dropdownleft__body__text'>{description}</p>
      </div>}
    </div>
  )
}
