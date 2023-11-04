const getAchievementAwardEntrysQuery = "SELECT * FROM AchievementAwardEntry WHERE cv_id = $1";

const getAchievementAwardEntryByIdQuery = "SELECT * FROM AchievementAwardEntry WHERE id = $1";

const createAchievementAwardEntryQuery = "INSERT INTO AchievementAwardEntry(cv_id, name, awarder, date_awarded, date_expired, ongoing) VALUES ($1, $2, $3, $4, $5, $6);"

const updateAchievementAwardEntryByIdQueries = {
    name: "UPDATE AchievementAwardEntry SET name = $1 WHERE id = $2;",
    awarder: "UPDATE AchievementAwardEntry SET awarder = $1 WHERE id = $2;",
    date_awarded: "UPDATE AchievementAwardEntry SET date_awarded = $1 WHERE id = $2;",
    date_expired: "UPDATE AchievementAwardEntry SET date_expired = $1 WHERE id = $2;",
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