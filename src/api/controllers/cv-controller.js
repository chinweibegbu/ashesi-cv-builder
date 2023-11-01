import pool from '../db.js';
import { cvQueries } from '../queries/cv-queries.js';
import { educationEntryQueries } from '../queries/section-queries/education-entry-queries.js';
import { achievementAwardEntryQueries } from '../queries/section-queries/achievement-award-entry-queries.js';
import { workExperienceEntryQueries } from '../queries/section-queries/work-experience-queries.js';
import { skillEntryQueries } from '../queries/section-queries/skill-entry-queries.js';


export const getCVs = (req, res) => {
    const userId = parseInt(req.params.userId);
    pool.query(
        cvQueries.getCVsQuery,
        [userId],
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const getCVById = (req, res) => {
    const idToGet = parseInt(req.params.id);
    pool.query(
        cvQueries.getCVByIdQuery,
        [idToGet],
        (error, results) => {
            if (error) throw error;

            let cv = results.rows[0];

            // Add education entries
            pool.query(
                educationEntryQueries.getEducationEntrysQuery,
                [idToGet],
                (error, educationResults) => {
                    if (error) {
                        throw error;
                    } else {
                        cv.education = educationResults.rows;

                        // Add achievement entries
                        pool.query(
                            achievementAwardEntryQueries.getAchievementAwardEntrysQuery,
                            [idToGet],
                            (error, achievementAwardResults) => {
                                if (error) {
                                    throw error;
                                } else {
                                    cv.achievementAwards = achievementAwardResults.rows;

                                    // Add work entries
                                    pool.query(
                                        workExperienceEntryQueries.getWorkExperienceEntrysQuery,
                                        [idToGet],
                                        (error, workExperienceResults) => {
                                            if (error) {
                                                throw error;
                                            } else {
                                                cv.workExperience = workExperienceResults.rows;

                                                // Add skill entries
                                                pool.query(
                                                    skillEntryQueries.getSkillEntrysQuery,
                                                    [idToGet],
                                                    (error, skillResults) => {
                                                        if (error) {
                                                            throw error;
                                                        } else {
                                                            cv.skills = skillResults.rows;

                                                            // Return completely loaded CV
                                                            res.status(200).send(cv);
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                }
            );
        }
    );
}

export const createCV = (req, res) => {
    const userId = parseInt(req.params.userId);
    const newCV = req.body;
    pool.query(
        cvQueries.createCVQuery,
        [newCV.name, newCV.lastEdited, newCV.linkToCV, userId, newCV.firstName, newCV.lastName, newCV.email, newCV.phoneNumber, newCV.city, newCV.country, newCV.nationality, newCV.linkedinUsername],
        (error, results) => {
            if (error) {
                throw error;
            } else {
                const newCVId = results.rows[0].id;

                // Add education entries
                const educationEntries = newCV.education;
                educationEntries.forEach((entry) => {
                    console.log(entry.startDate);
                    pool.query(
                        educationEntryQueries.createEducationEntryQuery,
                        [newCVId, entry.institutionName, entry.degree, entry.major, entry.cgpa, entry.city, entry.country, entry.startDate, entry.endDate, entry.ongoing],
                        (error, results) => {
                            if (error) {
                                throw error;
                            }
                        }
                    );
                });

                // Add achievement entries
                const achievementAwardEntries = newCV.achievementAwards;
                achievementAwardEntries.forEach((entry) => {
                    pool.query(
                        achievementAwardEntryQueries.createAchievementAwardEntryQuery,
                        [newCVId, entry.name, entry.awarder, entry.dateAwarded, entry.dateExpired, entry.ongoing],
                        (error, results) => {
                            if (error) {
                                throw error;
                            }
                        }
                    );
                });

                // Add work entries
                const workExperienceEntries = newCV.workExperience;
                workExperienceEntries.forEach((entry) => {
                    pool.query(
                        workExperienceEntryQueries.createWorkExperienceEntryQuery,
                        [newCVId, entry.companyName, entry.title, entry.companyCity, entry.companyCountry, entry.startDate, entry.endDate, entry.ongoing],
                        (error, results) => {
                            if (error) {
                                throw error;
                            }
                        }
                    );
                });

                // Add skill entries
                const skillEntries = newCV.skills;
                skillEntries.forEach((entry) => {
                    pool.query(
                        skillEntryQueries.createSkillEntryQuery,
                        [newCVId, entry.name, entry.level, entry.type],
                        (error, results) => {
                            if (error) {
                                throw error;
                            }
                        }
                    );
                });

                res.status(201).send(`CV named '${newCV.name}' successfully created!`);
            }
        }
    );


}

export const updateCVById = (req, res) => {
    const idToUpdate = parseInt(req.params.id);

    Object.keys(req.body).forEach(attribute => {
        pool.query(
            cvQueries.updateCVByIdQueries[attribute],
            [req.body[attribute], idToUpdate],
            (error, results) => {
                if (error) throw error;
            }
        );
    });

    res.status(200).send(`CV with ID ${idToUpdate} successfully updated!`);
};

export const deleteCVById = (req, res) => {
    const idToDelete = parseInt(req.params.id);
    pool.query(
        cvQueries.deleteCVByIdQuery,
        [idToDelete],
        (error, results) => {
            if (error) throw error;
        }
    );
    res.send(`CV with ID ${idToDelete} successfully deleted!`);
}