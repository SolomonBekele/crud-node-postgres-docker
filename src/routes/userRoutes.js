import express from "express";

import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/userController.js';
import validateUser from "../middlewares/inputValidator.js";


const router = express.Router();

// Get all users
router.get('/', getAllUsers);

// Get user by ID
router.get('/:id', getUserById);

// Create a new user
router.post('/',validateUser ,createUser);

// Update a user by ID
router.put('/:id',validateUser ,updateUserById);

// Delete a user by ID
router.delete('/:id', deleteUserById);

export default router;

