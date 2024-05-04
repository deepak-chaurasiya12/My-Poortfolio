const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000; // Choose your desired port

// Middleware
app.use(cors({
  origin: 'https://my-poortfolio-frontend.vercel.app' // Allow requests from this origin
}));
app.use(express.json()); // Middleware for parsing JSON bodies

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://dchaurasiya277:pLuHOW7HVT66whqE@cluster0.esogdi2.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Define a Mongoose schema for your form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/api/saveFormData', (req, res) => {
  const formData = new FormData(req.body);
  formData.save()
    .then(() => {
      res.setHeader('Access-Control-Allow-Origin', 'https://my-poortfolio-frontend.vercel.app');
      res.status(200).json({ message: 'Form data saved successfully' });
    })
    .catch(err => {
      console.error('Error saving form data:', err);
      res.status(500).json({ error: 'Error saving form data. Please try again later.' });
    });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
