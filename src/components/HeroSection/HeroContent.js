import React from 'react'

const HeroContent = () => {
  return (
    <>
    <section className="hero flex container">
        <div className="hero-left">
            <h1>Hello, I'm Harshitha</h1>
            <p >Web developer</p>
            <div className="hero-btns">
                <div className="lft-btn">
                    <button >Hire Me</button>
                </div>
                <div className="ryt-btn">
                    <button >Resume</button>
                </div>
            </div>
            <div className="icon">
               <a href="#" className="fa fa-facebook"></a>
               <a href="#" className="fa fa-twitter"></a>
               <a href="#" className="fa fa-instagram"></a>
               <a href="#" className="fa fa-linkedin"></a>
            </div>
        </div>
        <div className="hero-right">
            
            <div className="dot">        
                <span>
                    <img src="pp.png" alt="My pic" />
                </span>
                <div className="nxtdot"></div>
            </div>       
        
        </div>

    </section>
    </>
  )
}

export default HeroContent