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
    // Check if email is valid
    pool.query(
        userQueries.checkIfEmailExistsQuery,
        [newUser.email],
        (error, results) => {
            if (error) throw error;
            if (results.rows.length === 1) {
                res.status(409).send("ERROR: User with this email address already exists");
            } else {
                // Create user
                pool.query(
                    userQueries.createUserQuery,
                    [newUser.full_name, newUser.email, newUser.password],
                    (error, results) => {
                        if (error) {
                            throw error;
                        } else {
                            res.status(201).send(`Successfully created new user with email address: ${results.rows[0].email}`);
                        }
                    }
                );
            }
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
                res.status(200).send(results.rows[0]);
            } else {
                res.status(401).send("ERROR: Username or password is incorrect");
            }
        }
    );
}