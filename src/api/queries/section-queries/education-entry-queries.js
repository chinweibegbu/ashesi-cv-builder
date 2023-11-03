const getEducationEntrysQuery = "SELECT * FROM EducationEntry WHERE cv_id = $1";

const getEducationEntryByIdQuery = "SELECT * FROM EducationEntry WHERE id = $1";

const createEducationEntryQuery = "INSERT INTO EducationEntry(cv_id, institution_name, degree, major, cgpa, city, country, start_date, end_date, ongoing) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);"

const updateEducationEntryByIdQueries = {
    institution_name: "UPDATE EducationEntry SET institution_name = $1 WHERE id = $2;",
    degree: "UPDATE EducationEntry SET degree = $1 WHERE id = $2;",
    major: "UPDATE EducationEntry SET major = $1 WHERE id = $2;",
    cgpa: "UPDATE EducationEntry SET cgpa = $1 WHERE id = $2;",
    city: "UPDATE EducationEntry SET city = $1 WHERE id = $2;",
    country: "UPDATE EducationEntry SET country = $1 WHERE id = $2;",
    start_date: "UPDATE EducationEntry SET start_date = $1 WHERE id = $2;",
    end_date: "UPDATE EducationEntry SET end_date = $1 WHERE id = $2;",
    ongoing: "UPDATE EducationEntry SET ongoing = $1 WHERE id = $2;"
}

const deleteEducationEntryByIdQuery = "DELETE FROM EducationEntry WHERE id = $1;"

export const educationEntryQueries = {
    getEducationEntrysQuery,
    getEducationEntryByIdQuery,
    createEducationEntryQuery,
    updateEducationEntryByIdQueries,
    deleteEducationEntryByIdQuery
};