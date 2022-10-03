import React from 'react'
import "./Slideshow.css"
import { useState } from 'react'

export default function Slideshow({slides}) {

    const [current,setCurrent] = useState(0);
    const length = slides.length;
    console.log(length)
    
    const previousSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    
    console.log(current)

    return (
    <div className='slideshow'>
        {length > 1 &&
        <>
        <span className='leftarrow' onClick={previousSlide}><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/></svg></span>
        <span className='rightarrow' onClick={nextSlide}><svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/></svg></span>
        
        <span className='bullet'>{current + 1}/{length}</span></>}
        <img className='slideshow__img' src={slides[current]} alt="current logement"/>
        
    </div>
  )
}
