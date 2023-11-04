import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/CVDisplay.css';

function CVDisplay({ user_id, full_name, cvDetails }) {
    const getlast_editedText = (timestamp) => {
        const date = new Date(timestamp);

        const dateText = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

        let hour = "";
        if (date.getHours() === 0) {
            hour = "12";
        } else if (date.getHours() <= 12) {
            hour = date.getHours()+1;
        } else {
            hour = (date.getHours() - 12)+1;
        }
        const minutes = (date.getMinutes() / 10 < 1) ? "0" + (date.getMinutes()+1) : date.getMinutes()+1;
        const period = (hour <= 11) ? "AM" : "PM";
        const timeText = hour + ":" + minutes + " " + period;


        return dateText + " @ " + timeText;
    }

    const name = cvDetails.name;
    const last_edited = getlast_editedText(cvDetails.last_edited);

    const navigate = useNavigate();
    const handleExistingCVClick = () => {
        navigate("/edit-cv", {
            state: {
                user_id: user_id,
                full_name: full_name,
                cv_id: cvDetails.id
            }
        });
    }

    return (
        <div className="cv-display col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 bordered" onClick={handleExistingCVClick}>
            <div className="cv-display-img-preview">
                {/* Will hold an image preview of the CV */}
            </div>
            <div className="cv-display-details d-flex justify-content-between">
                <div className="details-text">
                    <p className="details-name">{name}</p>
                    <p className="details-time">Last Edited: {last_edited}</p>
                </div>
                <div className="details-interact-btn d-flex align-items-center">
                    <i className="bi-three-dots-vertical" />
                </div>
            </div>
        </div>
    );
}

export default CVDisplay;