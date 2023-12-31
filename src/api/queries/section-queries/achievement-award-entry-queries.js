const getAchievementAwardEntrysQuery = "SELECT id, cv_id, name, awarder, duration_type, TO_CHAR(date_awarded, 'yyyy-MM-dd') as date_awarded, TO_CHAR(date_expired, 'yyyy-MM-dd') as date_expired, ongoing FROM AchievementAwardEntry WHERE cv_id = $1";

const getAchievementAwardEntryByIdQuery = "SELECT * FROM AchievementAwardEntry WHERE id = $1";

const createAchievementAwardEntryQuery = "INSERT INTO AchievementAwardEntry(cv_id, name, awarder, duration_type, date_awarded, date_expired, ongoing) VALUES ($1, $2, $3, $4, $5, $6, $7);"

const updateAchievementAwardEntryByIdQueries = {
    name: "UPDATE AchievementAwardEntry SET name = $1 WHERE id = $2;",
    awarder: "UPDATE AchievementAwardEntry SET awarder = $1 WHERE id = $2;",
    duration_type: "UPDATE AchievementAwardEntry SET duration_type = $1 WHERE id = $2;",
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