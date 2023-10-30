import pool from '../db.js';
import { queries } from '../queries/setup-queries.js';

export const getPersons = (req, res) => {
    pool.query(
        queries.getPersonsQuery,
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const getPersonById = (req, res) => {
    const idToGet = parseInt(req.params.id);
    pool.query(
        queries.getPersonByIdQuery,
        [idToGet],
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const createPerson = (req, res) => {
    const newPerson = req.body;
    pool.query(
        queries.createPersonQuery,
        [newPerson.fullname, newPerson.age, newPerson.address],
        (error, results) => {
            if (error) throw error;
            console.log(results);
            res.status(201).send(`Person named '${newPerson.fullname}' successfully created!`);
        }
    );

    // persons.push(newPersonWithId);
    // res.status(201).send(`Person with name ${newPersonWithId.name} successfully created!`);
}

export const updatePersonById = (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const { fullname, age, address } = req.body;

    if (fullname) {
        pool.query(
            queries.updatePersonByIdQueries.fullname,
            [fullname, idToUpdate],
            (error, results) => {
                if (error) throw error;
            }
        );
    }

    if (age) {
        pool.query(
            queries.updatePersonByIdQueries.age,
            [age, idToUpdate],
            (error, results) => {
                if (error) throw error;
            }
        );
    }

    if (address) {
        pool.query(
            queries.updatePersonByIdQueries.address,
            [address, idToUpdate],
            (error, results) => {
                if (error) throw error;
            }
        );
    }

    res.status(200).send(`Person with ID ${idToUpdate} successfully updated!`);

    // res.send(`Person with ID ${id} successfully updated!`);

};

export const deletePersonById = (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const { id } = req.params;
    pool.query(
        queries.deletePersonByIdQuery,
        [idToDelete],
        (error, results) => {
            if (error) throw error;
        }
    );
    res.send(`Person with ID ${idToDelete} successfully deleted!`);
}