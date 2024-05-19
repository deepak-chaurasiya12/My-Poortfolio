import React, { useState } from 'react';
import './Asset/Form.css';
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
      // Use your deployed backend URL
      await axios.post('https://my-poortfolio-livid.vercel.app/api/saveFormData', formData);
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
