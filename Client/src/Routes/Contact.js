import React from 'react'
import Navbar from '../Components/Navbar'
import Heroimg2 from '../Components/Heroimg2'
import Footer from '../Components/Footer'
import Form from '../Components/Form'

const Contect = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT ME" text="For any questions or concerns, please feel free to reach out to us."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contect
