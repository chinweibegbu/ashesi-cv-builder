const getAchievementAwardEntrysQuery = "SELECT * FROM AchievementAwardEntry WHERE cvId = $1";

const getAchievementAwardEntryByIdQuery = "SELECT * FROM AchievementAwardEntry WHERE id = $1";

const createAchievementAwardEntryQuery = "INSERT INTO AchievementAwardEntry(cvId, name, awarder, dateAwarded, dateExpired, ongoing) VALUES ($1, $2, $3, $4, $5, $6);"

const updateAchievementAwardEntryByIdQueries = {
    name: "UPDATE AchievementAwardEntry SET name = $1 WHERE id = $2;",
    awarder: "UPDATE AchievementAwardEntry SET degree = $1 WHERE id = $2;",
    dateAwarded: "UPDATE AchievementAwardEntry SET dateAwarded = $1 WHERE id = $2;",
    dateExpired: "UPDATE AchievementAwardEntry SET dateExpired = $1 WHERE id = $2;",
    ongoing: "UPDATE AchievementAwardEntry SET ongoing = $1 WHERE id = $2;"
}

const deleteAchievementAwardEntryByIdQuery = "DELETE FROM AchievementAwardEntry WHERE id = $1;"

export const achievementAwardEntryQueries = {
    getAchievementAwardEntrysQuery,
    getAchievementAwardEntryByIdQuery,
    createAchievementAwardEntryQuery,
    updateAchievementAwardEntryByIdQueries,
    deleteAchievementAwardEntryByIdQuery
};