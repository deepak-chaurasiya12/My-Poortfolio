require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');

const app = express();

// Connect to MongoDB
connectDB()
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// CORS configuration
const corsOptions = {
  origin: 'https://my-poortfolio-frontend.vercel.app', // Your frontend domain
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api', formRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
