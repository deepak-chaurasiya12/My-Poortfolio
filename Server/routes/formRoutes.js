const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/saveFormData', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newForm = new Form({
      name,
      email,
      subject,
      message,
    });

    await newForm.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ message: 'Server error. Please try again later.', error: err.message });
  }
});

module.exports = router;
