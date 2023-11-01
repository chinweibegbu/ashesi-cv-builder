import express from 'express';
import { getCVs, getCVById, createCV, updateCVById, deleteCVById } from '../controllers/cv-controller.js';
import { getCVEducation, getCVAchievementAwards, getCVWorkExperience, getCVSkills } from '../controllers/section-controller.js';

// Initialising Express router
const cvRouter = express.Router({mergeParams: true});

// Creating routes
cvRouter.get('/', getCVs);
cvRouter.get('/:id', getCVById);
cvRouter.get('/:id/education', getCVEducation);
cvRouter.get('/:id/achievementAwards', getCVAchievementAwards);
cvRouter.get('/:id/workExperience', getCVWorkExperience);
cvRouter.get('/:id/skills', getCVSkills);
cvRouter.post('/', createCV);
cvRouter.patch('/:id', updateCVById);
cvRouter.delete('/:id', deleteCVById);

export default cvRouter;
