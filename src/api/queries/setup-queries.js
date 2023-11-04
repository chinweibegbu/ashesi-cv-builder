const dropAllTablesQuery = `DROP TABLE IF EXISTS "User", CV, EducationEntry, AchievementAwardEntry, WorkExperienceEntry, SkillEntry`;

const createUserTableQuery = `CREATE TABLE IF NOT EXISTS "User" (
 id SERIAL PRIMARY KEY,
 full_name TEXT NOT NULL,
 email TEXT UNIQUE NOT NULL,
 password TEXT NOT NULL)`;

const createCVTableQuery = `CREATE TABLE IF NOT EXISTS CV (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 last_edited TIMESTAMP NOT NULL,
 link_to_cv TEXT,
 user_id INTEGER NOT NULL,
 first_name TEXT NOT NULL,
 last_name TEXT NOT NULL,
 email TEXT NOT NULL,
 phone_number TEXT NOT NULL,
 city TEXT NOT NULL,
 country TEXT NOT NULL,
 nationality TEXT NOT NULL,
 linkedin_username TEXT NOT NULL,
 FOREIGN KEY (user_id) REFERENCES "User"(id))`;

const createEducationEntryTableQuery = `CREATE TABLE IF NOT EXISTS EducationEntry (
 id SERIAL PRIMARY KEY,
 cv_id INTEGER NOT NULL,
 institution_name TEXT NOT NULL,
 degree TEXT NOT NULL,
 major TEXT NOT NULL,
 cgpa DECIMAL NOT NULL,
 city TEXT NOT NULL,
 country TEXT NOT NULL,
 start_date DATE,
 end_date DATE,
 ongoing BOOLEAN NOT NULL,
 FOREIGN KEY (cv_id) REFERENCES CV(id)
)`;

const createAchievementAwardEntryTableQuery = `CREATE TABLE IF NOT EXISTS AchievementAwardEntry (
 id SERIAL PRIMARY KEY,
 cv_id INTEGER NOT NULL,
 name TEXT NOT NULL,
 awarder TEXT NOT NULL,
 date_awarded DATE,
 date_expired DATE,
 ongoing BOOLEAN NOT NULL,
 FOREIGN KEY (cv_id) REFERENCES CV(id)
)`;

const createWorkExperienceEntryTableQuery = `CREATE TABLE IF NOT EXISTS WorkExperienceEntry (
 id SERIAL PRIMARY KEY,
 cv_id INTEGER NOT NULL,
 company_name TEXT NOT NULL,
 title TEXT NOT NULL,
 company_city TEXT NOT NULL,
 company_country TEXT NOT NULL,
 start_date DATE,
 end_date DATE,
 ongoing BOOLEAN NOT NULL,
 FOREIGN KEY (cv_id) REFERENCES CV(id)
)`;

const createSkillEntryTableQuery = `CREATE TABLE IF NOT EXISTS SkillEntry (
 id SERIAL PRIMARY KEY,
 cv_id INTEGER NOT NULL,
 name TEXT NOT NULL,
 level TEXT NOT NULL,
 type TEXT NOT NULL,
 FOREIGN KEY (cv_id) REFERENCES CV(id)
)`;

const createTestUserQuery = `INSERT INTO "User" (full_name, email, password) VALUES ('Chinwe Ibegbu', 'chinwe.ibegbu@ashesi.edu.gh', 'admin')`;

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