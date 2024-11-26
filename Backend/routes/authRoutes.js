import express from 'express';
import {  login, getProfile } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();


router.post('/login', login);
router.get('/profile', authMiddleware, getProfile); 

export default router;
