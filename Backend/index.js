import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

import centerRoutes from './routes/centerRoutes.js'

dotenv.config();

// Initialize the express app
const app = express();

// // Set up CORS middleware to allow requests from your frontend
// app.use(cors({
//   origin: 'http://localhost:5173', // Allow requests from this origin
//   methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
//   allowedHeaders: 'Content-Type,Authorization', // Allowed headers
// }));
app.use(cors()); 

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve local images

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/centers', centerRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
