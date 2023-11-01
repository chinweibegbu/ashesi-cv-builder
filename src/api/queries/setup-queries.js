const dropAllTablesQuery = `DROP TABLE IF EXISTS "User", CV, EducationEntry, AchievementAwardEntry, WorkExperienceEntry, SkillEntry`;

const createUserTableQuery = `CREATE TABLE IF NOT EXISTS "User" (
 id SERIAL PRIMARY KEY,
 fullName TEXT NOT NULL,
 email TEXT UNIQUE NOT NULL,
 password TEXT NOT NULL)`;

const createCVTableQuery = `CREATE TABLE IF NOT EXISTS CV (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 lastEdited TIMESTAMP NOT NULL,
 linkToCV TEXT,
 userId INTEGER NOT NULL,
 firstName TEXT NOT NULL,
 lastName TEXT NOT NULL,
 email TEXT NOT NULL,
 phoneNumber TEXT NOT NULL,
 city TEXT NOT NULL,
 country TEXT NOT NULL,
 nationality TEXT NOT NULL,
 linkedinUsername TEXT NOT NULL,
 FOREIGN KEY (userId) REFERENCES "User"(id))`;

const createEducationEntryTableQuery = `CREATE TABLE IF NOT EXISTS EducationEntry (
 id SERIAL PRIMARY KEY ,
 cvId INTEGER NOT NULL ,
 institutionName TEXT NOT NULL ,
 degree TEXT NOT NULL ,
 major TEXT NOT NULL ,
 cgpa DECIMAL NOT NULL ,
 city TEXT NOT NULL ,
 country TEXT NOT NULL ,
 startDate DATE  ,
 endDate DATE ,
 ongoing BOOLEAN NOT NULL ,
 FOREIGN KEY (cvId) REFERENCES CV(id)
)`;

const createAchievementAwardEntryTableQuery = `CREATE TABLE IF NOT EXISTS AchievementAwardEntry (
 id SERIAL PRIMARY KEY ,
 cvId INTEGER NOT NULL ,
 name TEXT NOT NULL ,
 awarder TEXT NOT NULL ,
 dateAwarded DATE  ,
 dateExpired DATE ,
 ongoing BOOLEAN NOT NULL ,
 FOREIGN KEY (cvId) REFERENCES CV(id)
)`;

const createWorkExperienceEntryTableQuery = `CREATE TABLE IF NOT EXISTS WorkExperienceEntry (
 id SERIAL PRIMARY KEY ,
 cvId INTEGER NOT NULL ,
 companyName TEXT NOT NULL ,
 title TEXT NOT NULL ,
 companyCity TEXT NOT NULL ,
 companyCountry TEXT NOT NULL ,
 startDate DATE  ,
 endDate DATE ,
 ongoing BOOLEAN NOT NULL ,
 FOREIGN KEY (cvId) REFERENCES CV(id)
)`;

const createSkillEntryTableQuery = `CREATE TABLE IF NOT EXISTS SkillEntry (
 id SERIAL PRIMARY KEY ,
 cvId INTEGER NOT NULL ,
 name TEXT NOT NULL ,
 level TEXT NOT NULL ,
 type TEXT NOT NULL ,
 FOREIGN KEY (cvId) REFERENCES CV(id)
)`;

const createTestUserQuery = `INSERT INTO "User" (fullName, email, password) VALUES ('Chinwe Ibegbu', 'chinwe.ibegbu@ashesi.edu.gh', 'admin');
`;

export const setupQueries = {
    dropAllTablesQuery,
    createUserTableQuery,
    createCVTableQuery,
    createEducationEntryTableQuery,
    createAchievementAwardEntryTableQuery,
    createWorkExperienceEntryTableQuery,
    createSkillEntryTableQuery,
    createTestUserQuery
};