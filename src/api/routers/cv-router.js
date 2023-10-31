import express from 'express';
import { getCVs, getCVById, createCV, updateCVById, deleteCVById } from '../controllers/cv-controller.js';

// Initialising Express router
const cvRouter = express.Router({mergeParams: true});

// Creating routes
cvRouter.get('/', getCVs);
cvRouter.get('/:id', getCVById);
cvRouter.post('/', createCV);
cvRouter.patch('/:id', updateCVById);
cvRouter.delete('/:id', deleteCVById);

export default cvRouter;
