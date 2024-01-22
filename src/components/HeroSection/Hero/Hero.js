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
            <p>lll</p>
         </div>
        </div>
        <div className='hero-right'>
            {/* <div id='span-small' style={{backgroundImage:' linear-gradient(0, #743ad5, #d53a9d)',width:'6rem',height:'6rem',borderRadius:'50%',}}></div> */}
            <span className='span-big'>
            
                <img src="pp.png" alt="my pic" />
            
            </span>
            {/* <span id='span-small'></span> */}
         
        </div>
      </div>
    </section>
   
  )
}

export default Hero