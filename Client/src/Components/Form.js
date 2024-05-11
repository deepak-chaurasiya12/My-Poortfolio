import React, { useState } from 'react';
import axios from 'axios';

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
    e.preventDefault();
    
    try {
      // Send form data to backend
      await axios.post('https://my-poortfolio-nine.vercel.app/api/saveFormData', formData);
      
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
      alert('Error saving form data. Please try again later.');
    }
  };

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
