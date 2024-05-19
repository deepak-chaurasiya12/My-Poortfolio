require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'https://my-poortfolio-frontend.vercel.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Debugging: Check if environment variables are loaded correctly
console.log('MongoDB URL:', process.env.MONGODB_URL);
console.log('PORT:', process.env.PORT);

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

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
