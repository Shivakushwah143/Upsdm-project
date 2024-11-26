// controllers/centerController.js

import Center from '../models/Center.js';  // Import the Center model

// Add a new center
export const addCenter = async (req, res) => {
  try {
    const { centerType, centerName, district, tehsil, pincode, address, contactName, mobile1, mobile2, email } = req.body;
    
    // Create a new center
    const newCenter = new Center({
      centerType,
      centerName,
      district,
      tehsil,
      pincode,
      address,
      contactName,
      mobile1,
      mobile2,
      email
    });

    // Save the center to the database
    await newCenter.save();
    return res.status(201).json({ message: 'Center added successfully', center: newCenter });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error adding center', error: err.message });
  }
};

// Get all centers
export const getCenters = async (req, res) => {
  try {
    const centers = await Center.find();
    return res.status(200).json(centers);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error fetching centers', error: err.message });
  }
};

const centers = [
    {
      centerType: 'Type 1',
      centerName: 'Center A',
      district: 'District A',
      tehsil: 'Tehsil A',
      pincode: '12345',
      address: 'Address A',
      contactName: 'John Doe',
      mobile1: '1234567890',
      mobile2: '0987654321',
      email: 'example@example.com',
    },
    // More center objects...
  ];
  
  // Controller function to handle the "get all centers" request
  export const getAllCenters = (req, res) => {
    res.json(centers);
  };
  