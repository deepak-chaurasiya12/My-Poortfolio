import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import SkillSet from '../Components/SkillSet'

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="SKILLS" text="Set of skills had acquired so far"/>
      <SkillSet/>
      <Footer />
    </div>
  )
}

export default Skills
