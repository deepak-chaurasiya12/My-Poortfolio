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

// CORS Configuration with Preflight Support
const corsOptions = {
  origin: ["https://my-poortfolio-frontend.vercel.app", "http://localhost:3000"], // Allow both production & local frontend
  methods: "GET,POST,PUT,DELETE,OPTIONS", // Allow these HTTP methods
  allowedHeaders: "Content-Type, Authorization", // Allow these headers
  credentials: true, // Allow credentials like cookies
  optionsSuccessStatus: 200,
};

// Enable CORS Middleware
app.use(cors(corsOptions));

// Handle Preflight (OPTIONS) Requests for All Routes
app.options("*", cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Root Route
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

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
