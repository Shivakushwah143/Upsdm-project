import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,

    trim: true,
  },
  email: {
    type: String,

    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true, // Required because it's handled during registration
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
