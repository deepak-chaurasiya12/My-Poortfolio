import React from 'react'
import { FaHome, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import "../Components/Asset/Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left-content'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />

                        <div>
                            <p>Ashoka University,Sonipat</p>
                            <p>Haryana</p>
                        </div>
                    </div>

                    <div className='email'>
                        <p><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            dchaurasiya277@gmail.com</p>
                    </div>
                </div>

                <div className='right-content'>
                    <h4>About Me</h4>
                    <p>As a web developer, I have designed and developed websites through coursework, projects, and personal initiatives. I am eager to apply my skills in a professional setting and aspire to join a reputable company as a web developer in the future.
                    </p>
                    <div className='social'>
                        <a href='https://www.facebook.com/profile.php?id=100008806204675'> 
                            <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>

                        <a href='https://www.instagram.com/deepak___shuttler11/'>
                            <FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>

                        <a href='https://www.linkedin.com/in/deepak-chaurasiya-b65835206/'>
                            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />

                        </a>

                    </div>

                </div>
                <div className='reserved'>
                    <p>© 2024 Reserved By Deepak Chaurasiya</p>
                </div>

            </div>

        </div>
    )
}

export default Footer
