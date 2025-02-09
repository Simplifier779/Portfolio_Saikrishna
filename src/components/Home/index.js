import React from 'react';
/* 12 means 1.2 seconds delay.*/
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'
import './index.scss'
const Home = () => {
  const [letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['a','i','K','r','i','s','h','n','a']
  const jobArray=['L','Y',' ','C','S','E',' ','S','t','u','d','e','n','t']

   useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> 
            <br/>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24}/>
            </h1>
            <h2> Java / Flutter / React / DSA / Python / HTML</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
       <Logo/>
    </div>
    <Loader type="pacman" />
    </>
  );
}

export default Home;