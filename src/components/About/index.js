import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import Loader from 'react-loaders'
import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3,faPython,faHtml5,faReact,faJava,faGitAlt} from '@fortawesome/free-brands-svg-icons'
const About = () => {
    const [letterClass,setLetterClass]=useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
  return (
   <>
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']}
            idx={15} />
            </h1>
            <p>An energetic and enthusiastic person who is fond of coding, reading books and keeping myself fit. </p>
            <p>Strong organizational abilities with proven successes managing multiple academic projects and volunteering events. Able to function well in high-stress environments with professionalism and courtesy.</p>
            <p>Well-rounded and professional team player dedicated to continuing academic pursuits at a collegiate level.</p>
            <br />

            <div className='projects'>
            <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['P','r','o','j','e','c','t','s']}
            idx={17} />
            </h1>
            <p>
            <p className='bold'>Instagram Clone</p>
             April 2023-May 2023
             <br/>
             Purpose: Developed with Flutter and Firebase, it offers seamless performance on Android devices.
             Users can easily create accounts, sign in ensuring a personalized experience. They can upload, edit and delete posts, just like on Instagram, and showcase their photos to their followers.
             <p className='bold'>Railway Management System</p>

             January 2022 – April 2022
             <br/>
             Purpose: Built a Railway Ticket Booking Website with the help of HTML, CSS, Javascript and PHP. Developed the website ground up. It helps us to book tickets , delete tickets, add trains,delete trains,etc.
             <br/> 
             <p className='bold'>Chat Application</p>
             October 2022 – December 2022
             <br/>
             Purpose: Developed a chat application with MERN Stack. Worked on the back end majorly and handled the database and the functionalities of the application.
             </p>
             </div>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                   <FontAwesomeIcon icon={faHtml5} color="#F06529" /> 
                </div>
                <div className='face2'>
                   <FontAwesomeIcon icon={faJava} color="#F06529" /> 
                </div>
                <div className='face3'>
                   <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> 
                </div>
                <div className='face4'>
                   <FontAwesomeIcon icon={faPython} color="#FFD43B" /> 
                </div>
                <div className='face5'>
                   <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> 
                </div>
                <div className='face6'>
                   <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> 
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About