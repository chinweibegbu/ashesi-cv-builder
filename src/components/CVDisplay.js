import React from "react";
import '../styles/CVDisplay.css';

function CVDisplay({ cvDetails }) {
    const getLastEditedText = (timestamp) => {
        const date = new Date(timestamp);

        const dateText = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        let hour = "";
        if (date.getHours() === 0) {
            hour = "12";
        } else if (date.getHours() <= 12) {
            hour = date.getHours();
        } else {
            hour = date.getHours()-12;
        }
        const minutes = (date.getMinutes()/10 < 1) ? "0"+date.getMinutes() : date.getMinutes();
        const period = (date.getHours() <= 11) ? "AM": "PM";
        const timeText = hour + ":" + minutes + " " + period;


        return dateText + " @ " + timeText;
    }

    const name = cvDetails.name;
    const lastEdited = getLastEditedText(cvDetails.lastedited);
    
    return (
        <div className="cv-display col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 bordered">
            <div className="cv-display-img-preview">
                {/* Will hold an image preview of the CV */}
            </div>
            <div className="cv-display-details d-flex justify-content-between">
                <div className="details-text">
                    <p className="details-name">{name}</p>
                    <p className="details-time">Last Edited: {lastEdited}</p>
                </div>
                <div className="details-interact-btn d-flex align-items-center">
                    <i className="bi-three-dots-vertical" />
                </div>
            </div>
        </div>
    );
}

export default CVDisplay;