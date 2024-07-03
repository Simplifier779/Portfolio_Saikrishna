import './index.scss';
import Loader from 'react-loaders'//idx={15} means 1.5 sec delay
import React from 'react'
import AnimatedLetters from '../AnimatedLetters';
import {useState,useEffect,useRef} from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass,setLetterClass]=useState('text-animate')
    const refForm=useRef();

   useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail= (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_xw350o9', 'template_ay0hcoh', refForm.current,'Z_E9xpIiBYWlXc9kX')
    .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                <br />
                
            </h1>
            <p>An energetic and enthusiastic person who is fond of coding, reading books and keeping myself fit.Strong organizational abilities with proven successes managing multiple academic projects and volunteering events. Able to function well in high-stress environments with professionalism and courtesy.</p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required /> 
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required /> 
                        </li>
                        <li>
                            <input placeholder="subject" type="text" name='subject' required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>
            </div>       
        </div>
    </div>
    
    <Loader type='pacman' />
    </>
  )
}

export default Contact