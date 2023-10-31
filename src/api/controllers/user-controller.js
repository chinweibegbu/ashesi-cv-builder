import pool from '../db.js';
import { userQueries } from '../queries/user-queries.js';

export const getUsers = (req, res) => {
    pool.query(
        userQueries.getUsersQuery,
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const getUserById = (req, res) => {
    const idToGet = parseInt(req.params.id);
    pool.query(
        userQueries.getUserByIdQuery,
        [idToGet],
        (error, results) => {
            if (error) throw error;
            res.status(200).send(results.rows);
        }
    );
}

export const createUser = (req, res) => {
    const newUser = req.body;
    pool.query(
        userQueries.createUserQuery,
        [newUser.fullName, newUser.email, newUser.password],
        (error, results) => {
            if (error) throw error;
            console.log(results);
            res.status(201).send(`User named '${newUser.fullName}' successfully created!`);
        }
    );
}

export const checkIfUserExists = (req, res) => {
    const { email, password } = req.body;
    pool.query(
        userQueries.checkIfUserExistsQuery,
        [email, password],
        (error, results) => {
            if (error) throw error;
            if (results.rows.length === 1) {
                res.status(200).send("SUCCESS: User validated");
            } else {
                res.status(401).send("ERROR: Username or password is incorrect");
            }
        }
    );
}