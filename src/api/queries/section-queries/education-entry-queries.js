const getEducationEntrysQuery = "SELECT * FROM EducationEntry WHERE cvId = $1";

const getEducationEntryByIdQuery = "SELECT * FROM EducationEntry WHERE id = $1";

const createEducationEntryQuery = "INSERT INTO EducationEntry(cvId, institutionName, degree, major, cgpa, city, country, startDate, endDate, ongoing) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);"

const updateEducationEntryByIdQueries = {
    institutionName: "UPDATE EducationEntry SET institutionName = $1 WHERE id = $2;",
    degree: "UPDATE EducationEntry SET degree = $1 WHERE id = $2;",
    major: "UPDATE EducationEntry SET major = $1 WHERE id = $2;",
    cgpa: "UPDATE EducationEntry SET cgpa = $1 WHERE id = $2;",
    city: "UPDATE EducationEntry SET city = $1 WHERE id = $2;",
    country: "UPDATE EducationEntry SET country = $1 WHERE id = $2;",
    startDate: "UPDATE EducationEntry SET startDate = $1 WHERE id = $2;",
    endDate: "UPDATE EducationEntry SET endDate = $1 WHERE id = $2;",
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