// src/routes/userRoutes.ts
import express from 'express';
import { getAllUsers } from '../controllers/UserController';

const router = express.Router();

router.get('/users', getAllUsers);

export default router;
