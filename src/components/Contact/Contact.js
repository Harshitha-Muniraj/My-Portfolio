import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
    <section className='contact container' id='#contact'>
      <div className='contact-card'>
        <form className='cnt-form'>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email Address' />
          <textarea placeholder="Message" id='form-msg' cols="30" rows="6"/>
          <button>Contact</button>
        </form>
        <div className='otherContact-details'>
          <h2 className='cnt-head'>CONTACT</h2>
       
          <div className='mob-mail'>
          <div className='small'>
            <p><ion-icon name="mail-outline" id='icons'></ion-icon></p>
            <p>hhhh</p>
          </div>
          <div className='small'>
            <p><ion-icon name="call-outline" id='icons'></ion-icon></p>
            <p>123</p>
          </div>
          
          </div>
        </div>
        
      </div>
      <div   className='social-icons'>
       <div ><ion-icon id='icons' name="logo-github"></ion-icon></div>
        <div ><ion-icon id='icons' name="logo-linkedin"></ion-icon></div>
        <div ><ion-icon id='icons' name="logo-instagram"></ion-icon></div>
    </div>
      
    </section>
    
    </>
  )
}

export default Contact