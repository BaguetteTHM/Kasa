import React from 'react'
import "./Tags.css"

export default function Tags({tag}) {
  return (
    <div className='tags'>
        <span className='tags__text'>{tag}</span>
    </div>
  )
}
