import React from 'react'
import "./Slideshow.css"
import { useState } from 'react'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'

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
        <img src={arrowLeft} className='leftarrow' onClick={previousSlide} alt='left slide arrow'/>
        <img src={arrowRight} className='rightarrow' onClick={nextSlide} alt='right slide arrow'/>
        
        <span className='bullet'>{current + 1}/{length}</span></>}
        <img className='slideshow__img' src={slides[current]} alt="current logement"/>
        
    </div>
  )
}
