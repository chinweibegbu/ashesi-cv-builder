import express from 'express';
import { getUsers, getUserById, createUser, checkIfUserExists } from '../controllers/user-controller.js';

// Initialising Express router
const userRouter = express.Router();

// Creating routes
userRouter.get('/', getUsers);
userRouter.get('/validate', checkIfUserExists);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);

export default userRouter;