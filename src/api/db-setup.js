import pool from "./db.js";
import { setupQueries } from "./queries/setup-queries.js";

pool.query(
    setupQueries.dropAllTablesQuery,
    (error, results) => {
        if (error) throw error;
        console.log("DB has been successfully reset");

        pool.query(
            setupQueries.createUserTableQuery,
            (error, results) => {
                if (error) throw error;
                console.log("`User` table successfully created");

                pool.query(
                    setupQueries.createTestUserQuery,
                    (error, results) => {
                        if (error) throw error;
                        console.log("Test User successfully inserted"); 
                    }
                );
            }
        );

        pool.query(
            setupQueries.createCVTableQuery,
            (error, results) => {
                if (error) throw error;
                console.log("`CV` table successfully created");

                pool.query(
                    setupQueries.createEducationEntryTableQuery,
                    (error, results) => {
                        if (error) throw error;
                        console.log("`EducationEntry` table successfully created");
                    }
                );

                pool.query(
                    setupQueries.createAchievementAwardEntryTableQuery,
                    (error, results) => {
                        if (error) throw error;
                        console.log("`AchievementAwardEntry` table successfully created");
                    }
                );

                pool.query(
                    setupQueries.createWorkExperienceEntryTableQuery,
                    (error, results) => {
                        if (error) throw error;
                        console.log("`WorkExperienceEntry` table successfully created");
                    }
                );

                pool.query(
                    setupQueries.createSkillEntryTableQuery,
                    (error, results) => {
                        if (error) throw error;
                        console.log("`SkillEntry` table successfully created");
                    }
                );
            }
        );
    }
);
