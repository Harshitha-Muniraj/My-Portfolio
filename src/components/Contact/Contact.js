import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g67c33b', 'template_qprk1jy', form.current, 'F-ItOXAPaNbBv4zeK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <section className='contact container' id='#contact'>
      <div className='contact-card'>
        <form className='cnt-form'ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Name' name='from_name' />
          <input type="email" placeholder='Email Address' email='from_email' />
          <textarea placeholder="Message" name='message' id='form-msg' cols="30" rows="6"/>
          <button type='submit'>Contact</button>
        </form>
        <div className='otherContact-details'>
          <h2 className='cnt-head'>CONTACT</h2>
       
          <div className='mob-mail'>
          <div className='small'>
            <p><ion-icon name="mail-outline" id='icons'></ion-icon></p>
            <p onClick={() => window.location = 'mailto:harshithamuniraj22@gmail.com'}>harshithamuniraj22@gmail.com</p>
          </div>
          <div className='small'>
            <p><ion-icon name="call-outline" id='icons'></ion-icon></p>
            <p>6362766785</p>
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