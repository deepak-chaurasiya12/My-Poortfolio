import React, { useState } from 'react';
import './Asset/Form.css';
import axios from 'axios';

<<<<<<< HEAD
=======
axios.defaults.baseURL = 'https://my-poortfolio-seven.vercel.app/'

>>>>>>> 6027039bc308e8ba17e51363cca62c77c1000059
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    e.preventDefault();
    
    try {
      // Send form data to backend
      await axios.post('https://my-poortfolio-livid.vercel.app/api/saveFormData', formData);
; // changed the URL to relative path
      // Optionally, you can clear the form fields after saving
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Form data submitted successfully');
    } catch (error) {
      console.error('Error saving form data:', error);
      console.log('Error response:', error.response); // Log the error response
      alert('Error saving form data. Please try again later.');
    }
  };
=======
  e.preventDefault();
  
  try {
    // Use your deployed backend URL
    await axios.post('https://my-poortfolio-seven.vercel.app//api/saveFormData', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Form data submitted successfully');
  } catch (error) {
    console.error('Error saving form data:', error);
    console.log('Error response:', error.response);
    alert('Error saving form data. Please try again later.');
  }
};
>>>>>>> 6027039bc308e8ba17e51363cca62c77c1000059

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input 
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input 
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <label>Subject</label>
        <input 
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea 
          rows="6" 
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Type your message here'
        />
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
