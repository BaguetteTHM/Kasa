import React from 'react'
import "./Tags.css"

export default function Tags({t}) {
    console.log({t})
  return (
    <div className='tags'>
        <span className='tags__text'>{t}</span>
    </div>
  )
}
