const getWorkExperienceEntrysQuery = "SELECT id, cv_id, company_name, title, company_city, company_country, TO_CHAR(start_date, 'yyyy-MM-dd') as start_date, TO_CHAR(end_date, 'yyyy-MM-dd') as end_date, ongoing, description FROM WorkExperienceEntry WHERE cv_id = $1";

const getWorkExperienceEntryByIdQuery = "SELECT * FROM WorkExperienceEntry WHERE id = $1";

const createWorkExperienceEntryQuery = "INSERT INTO WorkExperienceEntry(cv_id, company_name, title, company_city, company_country, start_date, end_date, ongoing, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);"

const updateWorkExperienceEntryByIdQueries = {
    company_name: "UPDATE WorkExperienceEntry SET company_name = $1 WHERE id = $2;",
    title: "UPDATE WorkExperienceEntry SET title = $1 WHERE id = $2;",
    company_city: "UPDATE WorkExperienceEntry SET company_city = $1 WHERE id = $2;",
    company_country: "UPDATE WorkExperienceEntry SET company_country = $1 WHERE id = $2;",
    start_date: "UPDATE WorkExperienceEntry SET start_date = $1 WHERE id = $2;",
    end_date: "UPDATE WorkExperienceEntry SET end_date = $1 WHERE id = $2;",
    ongoing: "UPDATE WorkExperienceEntry SET ongoing = $1 WHERE id = $2;",
    description: "UPDATE WorkExperienceEntry SET description = $1 WHERE id = $2;"
}

const deleteWorkExperienceEntryByIdQuery = "DELETE FROM WorkExperienceEntry WHERE id = $1;"

export const workExperienceEntryQueries = {
    getWorkExperienceEntrysQuery,
    getWorkExperienceEntryByIdQuery,
    createWorkExperienceEntryQuery,
    updateWorkExperienceEntryByIdQueries,
    deleteWorkExperienceEntryByIdQuery
};