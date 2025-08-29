export const getlast_editedText = (timestamp) => {
    const date = new Date(timestamp);

    const dateText = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    let hour = "";
    let period = "";
    if (date.getHours() === 0) {
        hour = "12";
        period = "AM";
    } else if (date.getHours() <= 12) {
        hour = date.getHours();
        period = (hour < 12) ? "AM" : "PM";
    } else {
        hour = (date.getHours() - 12);
        period = "PM";
    }
    const minutes = (date.getMinutes() / 10 < 1) ? "0" + (date.getMinutes()) : date.getMinutes();
    const timeText = hour + ":" + minutes + " " + period;

    return dateText + " @ " + timeText;
}