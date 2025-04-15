import React from 'react';
import IntroImg1 from "../Components/Asset/Images/ia.webp";
import ProfilePic from "../Components/Asset/Images/profile.jpg"; // ← your profile image
import { Link } from 'react-router-dom';
import './Asset/Heroimg.css';

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg1} alt='IntroImg1'/>
        </div>

        <div className='content'>
          {/* Profile picture */}
          <img src={ProfilePic} alt="Deepak Profile" className="profile-img" />
            <p>Hi, I am Deepak</p>

            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>

                <a href="/Deepak_CV.pdf" target="_blank" rel="noopener noreferrer" className='btn btn-cv'>
                  View CV
                </a>
            </div>
        </div>
    </div>
  );
}

export default Heroimg;
