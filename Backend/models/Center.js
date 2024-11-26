import mongoose from 'mongoose';

// Define the Center schema
const centerSchema = new mongoose.Schema({
  centerType: { type: String, required: true },
  centerName: { type: String, required: true },
  district: { type: String, required: true },
  tehsil: { type: String, required: true },
  pincode: { type: String, required: true },
  address: { type: String, required: true },
  contactName: { type: String, required: true },
  mobile1: { type: String, required: true },
  mobile2: { type: String, required: true },
  email: { type: String, required: true },
  // Ensure no 'code' field if it's not needed or it shouldn't be unique
  // If you want to include 'code', make sure it's not unique
  code: { type: String, unique: false } 
});

// Create the Center model
const Center = mongoose.model('Center', centerSchema);

export default Center;
