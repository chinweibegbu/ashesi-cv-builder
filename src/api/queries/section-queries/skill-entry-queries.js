const getSkillEntrysQuery = "SELECT * FROM SkillEntry WHERE cvId = $1";

const getSkillEntryByIdQuery = "SELECT * FROM SkillEntry WHERE id = $1";

const createSkillEntryQuery = "INSERT INTO SkillEntry(cvId, name, level, type) VALUES ($1, $2, $3, $4);"

const updateSkillEntryByIdQueries = {
    name: "UPDATE SkillEntry SET name = $1 WHERE id = $2;",
    level: "UPDATE SkillEntry SET level = $1 WHERE id = $2;",
    type: "UPDATE SkillEntry SET type = $1 WHERE id = $2;"
}

const deleteSkillEntryByIdQuery = "DELETE FROM SkillEntry WHERE id = $1;"

export const skillEntryQueries = {
    getSkillEntrysQuery,
    getSkillEntryByIdQuery,
    createSkillEntryQuery,
    updateSkillEntryByIdQueries,
    deleteSkillEntryByIdQuery
};