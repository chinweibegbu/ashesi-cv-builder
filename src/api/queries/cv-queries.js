const getCVsQuery = "SELECT * FROM CV WHERE user_id = $1";

const getCVByIdQuery = "SELECT * FROM CV WHERE id = $1";

const createCVQuery = "INSERT INTO CV(name, last_edited, link_to_cv, user_id, first_name, last_name, email, phone_number, city, country, nationality, linkedin_username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id;"

const updateCVByIdQueries = {
    name: "UPDATE CV SET name = $1 WHERE id = $2;",
    last_edited: "UPDATE CV SET last_edited = $1 WHERE id = $2;",
    first_name: "UPDATE CV SET first_name = $1 WHERE id = $2;",
    last_name: "UPDATE CV SET last_name = $1 WHERE id = $2;",
    email: "UPDATE CV SET email = $1 WHERE id = $2;",
    phone_number: "UPDATE CV SET phone_number = $1 WHERE id = $2;",
    city: "UPDATE CV SET city = $1 WHERE id = $2;",
    country: "UPDATE CV SET country = $1 WHERE id = $2;",
    nationality: "UPDATE CV SET nationality = $1 WHERE id = $2;",
    linkedin_username: "UPDATE CV SET linkedin_username = $1 WHERE id = $2;"
}

const deleteCVByIdQuery = "DELETE FROM CV WHERE id = $1;"

export const cvQueries = {
    getCVsQuery,
    getCVByIdQuery,
    createCVQuery,
    updateCVByIdQueries,
    deleteCVByIdQuery
};