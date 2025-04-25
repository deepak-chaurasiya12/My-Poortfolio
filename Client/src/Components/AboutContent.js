import React from 'react';
import './Asset/AboutContent.css';
import pro1 from '../Components/Asset/Images/pic.webp';

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who am I?</h1>
        <p>I am a React web developer specializing in creating responsive, secure, and high-performance websites tailored to my clients' needs. I leverage AI-driven design techniques to enhance user experience and make web pages more visually appealing. With a focus on modern aesthetics, functionality, and security, I ensure that every project meets the highest industry standards.</p>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top rotating'>
            <img src={pro1} className='img' alt='profile' />
          </div>
          <div className='img-stack bottom rotating'>
            <img src={pro1} className='img' alt='profile' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;