require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://my-poortfolio-frontend.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// Middleware to parse JSON bodies
app.use(express.json());

// Debugging: Check if environment variables are loaded correctly
console.log('MongoDB URL:', process.env.MONGODB_URL);

// Connect to MongoDB Atlas using the environment variable
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Define a Mongoose schema for your form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// Route handler for saving form data
app.post('/api/saveFormData', async (req, res) => {
  console.log('Received form data:', req.body);

  try {
    console.time('SaveFormData');
    const formData = new FormData(req.body);
    await formData.save();
    console.timeEnd('SaveFormData');
    console.log('Form data saved successfully');
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ error: 'Error saving form data. Please try again later.' });
  }
});

// Export the app as a serverless function
module.exports = app;
