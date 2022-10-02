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
        <span onClick={previousSlide}>fleche gauche</span>
        <span onClick={nextSlide}>fleche droite</span>
        <span>{current + 1}/{length}</span>
        <img src={slides[current]} alt="current logement"/>
        
    </div>
  )
}
