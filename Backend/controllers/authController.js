import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';
import jwt from 'jsonwebtoken';

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already registered!' });

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save image locally first
    const localImagePath = req.file.path;

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(localImagePath);

    // Save user data to the database
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      profileImage: result.secure_url, // Store Cloudinary URL
    });

    await newUser.save();

    // Delete the locally saved image after uploading to Cloudinary
    fs.unlinkSync(localImagePath);

    res.status(201).json({ message: 'User registered successfully!', user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    // Return the user and token
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
// controllers/authController.js
export const getProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

