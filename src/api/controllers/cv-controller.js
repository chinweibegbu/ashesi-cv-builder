import pool from '../db.js';
import { cvQueries } from '../queries/cv-queries.js';
import { educationEntryQueries } from '../queries/section-queries/education-entry-queries.js';
import { achievementAwardEntryQueries } from '../queries/section-queries/achievement-award-entry-queries.js';
import { workExperienceEntryQueries } from '../queries/section-queries/work-experience-queries.js';
import { skillEntryQueries } from '../queries/section-queries/skill-entry-queries.js';


export const getCVs = (req, res) => {
    const user_id = parseInt(req.params.user_id);
    pool.query(
        cvQueries.getCVsQuery,
        [user_id],
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
                                    cv.achievementsAwards = achievementAwardResults.rows;

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
    const user_id = parseInt(req.params.user_id);
    const newCV = req.body;
    console.log(newCV);
    pool.query(
        cvQueries.createCVQuery,
        [newCV.name, newCV.last_edited, newCV.link_to_cv, user_id, newCV.first_name, newCV.last_name, newCV.email, newCV.phone_number, newCV.city, newCV.country, newCV.nationality, newCV.linkedin_username],
        (error, results) => {
            if (error) {
                throw error;
            } else {
                const newCVId = results.rows[0].id;

                // Add education entries
                const educationEntries = newCV.education;
                educationEntries.forEach((entry) => {
                    if (entry.active) {
                        pool.query(
                            educationEntryQueries.createEducationEntryQuery,
                            [newCVId, entry.institution_name, entry.degree, entry.major, entry.cgpa, entry.city, entry.country, entry.start_date, entry.end_date, entry.ongoing],
                            (error, results) => {
                                if (error) {
                                    throw error;
                                }
                            }
                        );
                    }
                });

                // Add achievement entries
                const achievementAwardEntries = newCV.achievementsAwards;
                achievementAwardEntries.forEach((entry) => {
                    if (entry.active) {
                        pool.query(
                            achievementAwardEntryQueries.createAchievementAwardEntryQuery,
                            [newCVId, entry.name, entry.awarder, entry.duration_type, entry.date_awarded, entry.date_expired, entry.ongoing],
                            (error, results) => {
                                if (error) {
                                    throw error;
                                }
                            }
                        );
                    }
                });

                // Add work entries
                const workExperienceEntries = newCV.workExperience;
                workExperienceEntries.forEach((entry) => {
                    if (entry.active) {
                        pool.query(
                            workExperienceEntryQueries.createWorkExperienceEntryQuery,
                            [newCVId, entry.company_name, entry.title, entry.company_city, entry.company_country, entry.start_date, entry.end_date, entry.ongoing],
                            (error, results) => {
                                if (error) {
                                    throw error;
                                }
                            }
                        );
                    }
                });

                // Add skill entries
                const skillEntries = newCV.skills;
                skillEntries.forEach((entry) => {
                    if (entry.active) {
                        pool.query(
                            skillEntryQueries.createSkillEntryQuery,
                            [newCVId, entry.name, entry.level, entry.type],
                            (error, results) => {
                                if (error) {
                                    throw error;
                                }
                            }
                        );
                    }
                });

                res.status(201).send(`CV named '${newCV.name}' successfully created!`);
            }
        }
    );


}

export const updateCVById = (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const updatedCV = req.body;

    Object.keys(updatedCV).forEach(attribute => {
        if (typeof updatedCV[attribute] !== "object") {
            pool.query(
                cvQueries.updateCVByIdQueries[attribute],
                [req.body[attribute], idToUpdate],
                (error, results) => {
                    if (error) throw error;
                }
            );
        }
    });

    // Update active education entries
    updatedCV.education.forEach(educationEntry => {
        if (educationEntry.active) {
            if (educationEntry.id) {
                // If the entry has an ID, then it is already in the DB
                // --> Use the UPDATE query
                const entry_id = educationEntry.id;
                Object.keys(educationEntry).forEach(attribute => {
                    if (!(["id", "cv_id", "active"].includes(attribute))) {
                        pool.query(
                            educationEntryQueries.updateEducationEntryByIdQueries[attribute],
                            [educationEntry[attribute], entry_id],
                            (error, results) => {
                                if (error) throw error;
                            }
                        );
                    }
                });
            } else {
                // If the entry has no ID, then it is NOT in the DB
                // --> Use the INSERT query
                pool.query(
                    educationEntryQueries.createEducationEntryQuery,
                    [idToUpdate, educationEntry.institution_name, educationEntry.degree, educationEntry.major, educationEntry.cgpa, educationEntry.city, educationEntry.country, educationEntry.start_date, educationEntry.end_date, educationEntry.ongoing],
                    (error, results) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    });


    // Update active achievementsAwards entries
    updatedCV.achievementsAwards.forEach(achievementAwardEntry => {
        if (achievementAwardEntry.active) {
            if (achievementAwardEntry.id) {
                // If the entry has an ID, then it is already in the DB
                // --> Use the UPDATE query
                const entry_id = achievementAwardEntry.id;
                Object.keys(achievementAwardEntry).forEach(attribute => {
                    if (!(["id", "cv_id", "active"].includes(attribute))) {
                        pool.query(
                            achievementAwardEntryQueries.updateAchievementAwardEntryByIdQueries[attribute],
                            [achievementAwardEntry[attribute], entry_id],
                            (error, results) => {
                                if (error) throw error;
                            }
                        );
                    }
                });
            } else {
                // If the entry has no ID, then it is NOT in the DB
                // --> Use the INSERT query
                pool.query(
                    achievementAwardEntryQueries.createAchievementAwardEntryQuery,
                    [idToUpdate, achievementAwardEntry.name, achievementAwardEntry.awarder, achievementAwardEntry.duration_type, achievementAwardEntry.date_awarded, achievementAwardEntry.date_expired, achievementAwardEntry.ongoing],
                    (error, results) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    });

    // Update active workExperience entries
    updatedCV.workExperience.forEach(workExperienceEntry => {
        if (workExperienceEntry.active) {
            if (workExperienceEntry.id) {
                // If the entry has an ID, then it is already in the DB
                // --> Use the UPDATE query
                const entry_id = workExperienceEntry.id;
                Object.keys(workExperienceEntry).forEach(attribute => {
                    if (!(["id", "cv_id", "active"].includes(attribute))) {
                        pool.query(
                            workExperienceEntryQueries.updateWorkExperienceEntryByIdQueries[attribute],
                            [workExperienceEntry[attribute], entry_id],
                            (error, results) => {
                                if (error) throw error;
                            }
                        );
                    }
                });
            } else {
                // If the entry has no ID, then it is NOT in the DB
                // --> Use the INSERT query
                pool.query(
                    workExperienceEntryQueries.createWorkExperienceEntryQuery,
                    [idToUpdate, workExperienceEntry.company_name, workExperienceEntry.title, workExperienceEntry.company_city, workExperienceEntry.company_country, workExperienceEntry.start_date, workExperienceEntry.end_date, workExperienceEntry.ongoing],
                    (error, results) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
    });
    
    // Update active skill entries
    updatedCV.skills.forEach(skillEntry => {
        if (skillEntry.active) {
            if (skillEntry.id) {
                // If the entry has an ID, then it is already in the DB
                // --> Use the UPDATE query
                const entry_id = skillEntry.id;
                Object.keys(skillEntry).forEach(attribute => {
                    if (!(["id", "cv_id", "active"].includes(attribute))) {
                        pool.query(
                            skillEntryQueries.updateSkillEntryByIdQueries[attribute],
                            [skillEntry[attribute], entry_id],
                            (error, results) => {
                                if (error) throw error;
                            }
                        );
                    }
                });
            } else {
                // If the entry has no ID, then it is NOT in the DB
                // --> Use the INSERT query
                pool.query(
                    skillEntryQueries.createSkillEntryQuery,
                    [idToUpdate, skillEntry.name, skillEntry.level, skillEntry.type],
                    (error, results) => {
                        if (error) {
                            throw error;
                        }
                    }
                );
            }
        }
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