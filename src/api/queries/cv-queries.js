const getCVsQuery = "SELECT * FROM CV WHERE userId = $1";

const getCVByIdQuery = "SELECT * FROM CV WHERE id = $1";

const createCVQuery = "INSERT INTO CV(name, lastEdited, linkToCV, userId, firstName, lastName, email, phoneNumber, city, country, nationality, linkedinUsername) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id;"

const updateCVByIdQueries = {
    name: "UPDATE CV SET name = $1 WHERE id = $2;",
    lastEdited: "UPDATE CV SET lastEdited = $1 WHERE id = $2;",
    firstName: "UPDATE CV SET firstName = $1 WHERE id = $2;",
    lastName: "UPDATE CV SET lastName = $1 WHERE id = $2;",
    email: "UPDATE CV SET email = $1 WHERE id = $2;",
    phoneNumber: "UPDATE CV SET phoneNumber = $1 WHERE id = $2;",
    city: "UPDATE CV SET city = $1 WHERE id = $2;",
    country: "UPDATE CV SET country = $1 WHERE id = $2;",
    nationality: "UPDATE CV SET nationality = $1 WHERE id = $2;",
    linkedinUsername: "UPDATE CV SET linkedinUsername = $1 WHERE id = $2;"
}

const deleteCVByIdQuery = "DELETE FROM CV WHERE id = $1;"

export const cvQueries = {
    getCVsQuery,
    getCVByIdQuery,
    createCVQuery,
    updateCVByIdQueries,
    deleteCVByIdQuery
};