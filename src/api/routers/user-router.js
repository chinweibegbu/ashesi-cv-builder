import express from 'express';
import { getUsers, getUserById, createUser, checkIfUserExists, validateUser } from '../controllers/user-controller.js';

// Initialising Express router
const userRouter = express.Router();

// Creating routes
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.post('/validate', validateUser);

export default userRouter;