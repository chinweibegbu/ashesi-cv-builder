const createUserTableQuery = `CREATE TABLE IF NOT EXISTS "User" (`
+ ` id INTEGER PRIMARY KEY,`
+ ` email TEXT UNIQUE NOT NULL,`
+ ` password TEXT UNIQUE NOT NULL`
+ `)`;

const createCVTableQuery = `CREATE TABLE IF NOT EXISTS CV (`
+ ` id INTEGER PRIMARY KEY,`
+ ` name TEXT NOT NULL,`
+ ` linkToCV TEXT,`
+ ` userId INTEGER NOT NULL,`
+ ` firstName TEXT NOT NULL,`
+ ` lastName TEXT NOT NULL,`
+ ` email TEXT NOT NULL,`
+ ` phoneNumber TEXT NOT NULL,`
+ ` city TEXT NOT NULL,`
+ ` country TEXT NOT NULL,`
+ ` nationality TEXT NOT NULL,`
+ ` linkedinUsername TEXT NOT NULL,`
+ ` FOREIGN KEY (userId) REFERENCES "User"(id)`
+ `)`;

const createEducationEntryTableQuery = `CREATE TABLE IF NOT EXISTS EducationEntry (`
+ ` id INTEGER PRIMARY KEY,`
+ ` cvId INTEGER NOT NULL,`
+ ` institutionName TEXT NOT NULL,`
+ ` degree TEXT NOT NULL,`
+ ` major TEXT NOT NULL,`
+ ` cgpa DECIMAL NOT NULL,`
+ ` city TEXT NOT NULL,`
+ ` country TEXT NOT NULL,`
+ ` startDate TIMESTAMP NOT NULL,`
+ ` endDate TIMESTAMP,`
+ ` ongoing BOOLEAN NOT NULL,`
+ ` FOREIGN KEY (cvId) REFERENCES CV(id)`
+ `)`;

const createAchievementAwardEntryTableQuery = `CREATE TABLE IF NOT EXISTS AchievementAwardEntry (`
+ ` id INTEGER PRIMARY KEY,`
+ ` cvId INTEGER NOT NULL,`
+ ` name TEXT NOT NULL,`
+ ` awarder TEXT NOT NULL,`
+ ` dateAwarded TIMESTAMP NOT NULL,`
+ ` dateExpired TIMESTAMP,`
+ ` ongoing BOOLEAN NOT NULL,`
+ ` FOREIGN KEY (cvId) REFERENCES CV(id)`
+ `)`;

const createWorkExperienceEntryTableQuery = `CREATE TABLE IF NOT EXISTS WorkExperienceEntry (`
+ ` id INTEGER PRIMARY KEY,`
+ ` cvId INTEGER NOT NULL,`
+ ` companyName TEXT NOT NULL,`
+ ` title TEXT NOT NULL,`
+ ` companyCity TEXT NOT NULL,`
+ ` companyCountry DECIMAL NOT NULL,`
+ ` startDate TIMESTAMP NOT NULL,`
+ ` endDate TIMESTAMP,`
+ ` ongoing BOOLEAN NOT NULL,`
+ ` FOREIGN KEY (cvId) REFERENCES CV(id)`
+ `)`;

const createSkillEntryTableQuery = `CREATE TABLE IF NOT EXISTS SkillEntry (`
+ ` id INTEGER PRIMARY KEY,`
+ ` cvId INTEGER NOT NULL,`
+ ` name TEXT NOT NULL,`
+ ` level TEXT NOT NULL,`
+ ` type TIMESTAMP NOT NULL,`
+ ` FOREIGN KEY (cvId) REFERENCES CV(id)`
+ `)`;

export const setupQueries = {
    createUserTableQuery,
    createCVTableQuery,
    createEducationEntryTableQuery,
    createAchievementAwardEntryTableQuery,
    createWorkExperienceEntryTableQuery,
    createSkillEntryTableQuery
};