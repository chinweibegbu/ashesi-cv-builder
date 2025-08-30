import pool from '../db.js';
import { userQueries } from '../queries/user-queries.js';
import bcrypt from 'bcryptjs';
import { saltRounds } from "../../utils/constants.js";

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
        async (error, results) => {
            if (error) throw error;
            if (results.rows.length === 1) {
                res.status(409).send("ERROR: User with this email address already exists");
            } else {
                // Hash password
                await bcrypt.hash(newUser.password, saltRounds)
                    .then((response) => {
                        // Create user
                        pool.query(
                            userQueries.createUserQuery,
                            [newUser.full_name, newUser.email, response],
                            (error, results) => {
                                if (error) {
                                    throw error;
                                } else {
                                    res.sendStatus(201);
                                }
                            }
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                    });
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

export const validateUser = (req, res) => {
    const { email, password } = req.body;
    pool.query(
        userQueries.checkIfEmailExistsQuery,
        [email],
        async (error, results) => {
            if (error) throw error;
            if (results.rows.length === 0) {
                results.status(409).send("ERROR: Email does not exist");
            } else {
                // Validate password with bcryptjs
                await bcrypt.compare(password, results.rows[0].password)
                    .then(async (response) => {
                        if (response === true) {
                            res.status(200).send(results.rows[0]);
                        } else {
                            res.status(409).send("ERROR: Email or password is incorrect");
                        }
                    });
            }
        }
    );
}