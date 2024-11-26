// routes/centerRoutes.js

import express from 'express';
import { addCenter, getCenters } from '../controllers/centerController.js';

const router = express.Router();

// POST request to add a new center
router.post('/add', addCenter);

// GET request to fetch all centers
router.get('/', getCenters);

export default router;
