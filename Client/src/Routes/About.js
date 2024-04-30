import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import Footer from '../Components/Footer'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="Crafting Digital experiences with Pasion and Expertise" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
