import pool from '../db.js';
import { educationEntryQueries } from '../queries/section-queries/education-entry-queries.js';
import { achievementAwardEntryQueries } from '../queries/section-queries/achievement-award-entry-queries.js';
import { workExperienceEntryQueries } from '../queries/section-queries/work-experience-queries.js';
import { skillEntryQueries } from '../queries/section-queries/skill-entry-queries.js';

export const getCVEducation = (req, res) => {
    const cv_id = parseInt(req.params.id);
    pool.query(
        educationEntryQueries.getEducationEntrysQuery,
        [cv_id],
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const getCVAchievementAwards = (req, res) => {
    const cv_id = parseInt(req.params.id);
    pool.query(
        achievementAwardEntryQueries.getAchievementAwardEntrysQuery,
        [cv_id],
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const getCVWorkExperience = (req, res) => {
    const cv_id = parseInt(req.params.id);
    pool.query(
        workExperienceEntryQueries.getWorkExperienceEntrysQuery,
        [cv_id],
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const getCVSkills = (req, res) => {
    const cv_id = parseInt(req.params.id);
    pool.query(
        skillEntryQueries.getSkillEntrysQuery,
        [cv_id],
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

