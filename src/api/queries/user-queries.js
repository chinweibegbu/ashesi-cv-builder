const getUsersQuery = `SELECT * FROM "User"`;

const getUserByIdQuery = `SELECT * FROM "User" WHERE id = $1`;

const createUserQuery = `INSERT INTO "User"(full_name, email, password) VALUES ($1, $2, $3);`

const checkIfUserExistsQuery = `SELECT * FROM "User" WHERE email = $1 AND password = $2`;

export const userQueries = {
    getUsersQuery,
    getUserByIdQuery,
    createUserQuery,
    checkIfUserExistsQuery
};