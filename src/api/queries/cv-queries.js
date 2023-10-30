const getCVsQuery = "SELECT * FROM CV WHERE userId = $1";

const getCVByIdQuery = "SELECT * FROM CV WHERE id = $1";

const createCVQuery = "INSERT INTO CV(fullname, age, address) VALUES ($1, $2, $3);"

const updateCVByIdQueries = {
    fullname: "UPDATE persons SET fullname = $1 WHERE id = $2;",
    age: "UPDATE persons SET age = $1 WHERE id = $2;",
    address: "UPDATE persons SET address = $1 WHERE id = $2;"
}

const deleteCVByIdQuery = "DELETE FROM persons WHERE id = $1;"

export const setupQueries = {
    getCVsQuery,
    getCVByIdQuery,
    createCVQuery,
    updateCVByIdQueries,
    deleteCVByIdQuery
};