import pool from '../db.js';
import { cvQueries } from '../queries/cv-queries.js';

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
            res.status(200).send(results.rows);
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
            if (error) throw error;
            console.log(results);
            res.status(201).send(`CV named '${newCV.name}' successfully created!`);
        }
    );
}

export const updateCVById = (req, res) => {
    const idToUpdate = parseInt(req.params.id);

    Object.keys(req.body).forEach( attribute => {
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