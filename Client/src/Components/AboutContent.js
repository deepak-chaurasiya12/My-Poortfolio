import React from 'react'
import './Asset/AboutContent.css'
import { Link } from 'react-router-dom'
import pro1 from '../Components/Asset/Images/ia.webp'
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am react web developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>

        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                   <img src={pro1} className='img' alt='true'/> 
                </div>
                <div className='img-stack bottom'>
                   <img src={pro1} className='img' alt='pic1'/> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent
