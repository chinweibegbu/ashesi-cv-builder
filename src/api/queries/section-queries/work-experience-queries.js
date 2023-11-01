const getWorkExperienceEntrysQuery = "SELECT * FROM WorkExperienceEntry WHERE cvId = $1";

const getWorkExperienceEntryByIdQuery = "SELECT * FROM WorkExperienceEntry WHERE id = $1";

const createWorkExperienceEntryQuery = "INSERT INTO WorkExperienceEntry(cvId, companyName, title, companyCity, companyCountry, startDate, endDate, ongoing) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);"

const updateWorkExperienceEntryByIdQueries = {
    companyName: "UPDATE WorkExperienceEntry SET institutionName = $1 WHERE id = $2;",
    title: "UPDATE WorkExperienceEntry SET title = $1 WHERE id = $2;",
    companyCity: "UPDATE WorkExperienceEntry SET companyCity = $1 WHERE id = $2;",
    companyCountry: "UPDATE WorkExperienceEntry SET companyCountry = $1 WHERE id = $2;",
    startDate: "UPDATE WorkExperienceEntry SET startDate = $1 WHERE id = $2;",
    endDate: "UPDATE WorkExperienceEntry SET endDate = $1 WHERE id = $2;",
    ongoing: "UPDATE WorkExperienceEntry SET ongoing = $1 WHERE id = $2;"
}

const deleteWorkExperienceEntryByIdQuery = "DELETE FROM WorkExperienceEntry WHERE id = $1;"

export const workExperienceEntryQueries = {
    getWorkExperienceEntrysQuery,
    getWorkExperienceEntryByIdQuery,
    createWorkExperienceEntryQuery,
    updateWorkExperienceEntryByIdQueries,
    deleteWorkExperienceEntryByIdQuery
};