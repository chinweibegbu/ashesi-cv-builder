import React from "react";
import '../styles/CVDisplay.css';

function CVDisplay({ cvDetails }) {
    const name = cvDetails.name,
        lastEdited = "3 hours ago";
    return (
        <div className="cv-display col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3 bordered">
            <div className="cv-display-img-preview">
                {/* Will hold an image preview of the CV */}
            </div>
            <div className="cv-display-details d-flex justify-content-between">
                <div className="details-text">
                    <p className="details-name text-truncate">{name}</p>
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