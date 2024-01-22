import React, { useEffect, useState } from 'react';
import {Outlet} from 'react-router-dom'
import { Link } from 'react-scroll';
import './NavBar.css'
const Navbar = () => {
  const [btnToggle,SetBtnToggle]=useState(false);
  const [showClass,SetShowClass]=useState('')
  function toggle(){
    SetBtnToggle(!btnToggle);
    

  }
  function res(){
    if(btnToggle===false){
      console.log(btnToggle)
      SetShowClass('resp-hide')
    }else SetShowClass("")
  }
  useEffect(()=>{
      res()
  },[btnToggle])
  return (
    <>
    <nav className='navbar'>
      <div>
        <h1 >Harshitha.M</h1>
      </div>
      <div >
        <ul className={`navlist ${showClass}` }style={btnToggle?{opacity:'1',visibility:'visible'}:null}>
        <li className='navitem' onClick={()=>SetBtnToggle(!btnToggle)}><Link to='#home' spy={true} smooth={true} duration={500} offset={-100}>HOME</Link></li>
        <li className='navitem' onClick={()=>SetBtnToggle(!btnToggle)}><Link to='#about' spy={true} smooth={true} duration={500} offset={-100}>ABOUT</Link></li>
        <li className='navitem' onClick={()=>SetBtnToggle(!btnToggle)}><Link to='#skill' spy={true} smooth={true} duration={500} offset={-100}>SKILLS</Link></li>
        <li className='navitem' onClick={()=>SetBtnToggle(!btnToggle)}><Link to='#project' spy={true} smooth={true} duration={500} offset={-100}>PROJECTS</Link></li>
        <li className='navitem' onClick={()=>SetBtnToggle(!btnToggle)}><Link to='#contact' spy={true} smooth={true} duration={500} offset={-100}>CONTACT</Link></li>
        </ul>
        
      </div>
      <button  className='btn-mobile-nav' onClick={toggle}>
    <ion-icon name="menu-outline" id='icon-mobile-nav' style={btnToggle?{display: 'none'}:{display: 'block'}}></ion-icon>
    <ion-icon name="close-outline" id='icon-mobile-nav'style={btnToggle?{display: 'block'}:{display: 'none'}}></ion-icon>
    </button>
    </nav>
    
    
  



    </>
  )
}

export default Navbar;