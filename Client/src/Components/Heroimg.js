import React from 'react';
import IntroImg1 from "../Components/Asset/Images/ia.webp";
import { Link } from 'react-router-dom';

import './Asset/Heroimg.css'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img'  src={IntroImg1} alt='IntroImg1'/>
        </div>

        <div className='content'>
            <p>Hi, I am Deepak</p>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>

        </div>
      
    </div>
  )
}

export default Heroimg;
