import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
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
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            8787085500
                        </h4>
                    </div>

                    <div className='email'>
                        <p><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            dchaurasiya277@gmail.com</p>
                    </div>
                </div>

                <div className='right-content'>
                    <h4>About Me as a Web Developer</h4>
                    <p>As a Web developer, I have created the websites in which some of as a course work/project or my own personal projects. In future, I am looking for a good company to join as a web developer.
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
