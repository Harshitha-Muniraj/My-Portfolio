import React from 'react'
import './Hero.css'
import Navbar from '../NavBar/NavBar'
const Hero = () => {
  return (
    
    <section className='hero container' id='#home'>
    
      <div className='hero-flex'>
        <div className='hero-left'>
         <div className='hero-left gap1'>
           <h1>Hello,</h1>
           <h1>I'm Harshitha</h1>
           <h2>WEB DEVELOPER</h2>
          
         </div>
         <div className='hero-left gap2' >
            <button ><a href="Resume_Harshitha.pdf" download> Download CV {'    '} <ion-icon name="download" id="download-btn"></ion-icon> </a> </button> 
         </div>
        </div>
        <div className='hero-right'>
          <span className='span-big'>
            <img src="pp.png" alt="my pic" />
          </span>
        </div>
      </div>
    </section>
   
  )
}

export default Hero