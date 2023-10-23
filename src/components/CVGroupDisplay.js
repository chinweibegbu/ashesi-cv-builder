import React from "react";
import '../styles/CVGroupDisplay.css';
import CVDisplay from "./CVDisplay";

function CVGroupDisplay({ subHeadingText, allCVDetails }) {

    return (
        <div className="cv-display-group mt-2 row-flex bordered">
            <p className="row-flex sub-heading">{subHeadingText}</p>
            <div className="row-flex d-flex flex-wrap">
                {
                    allCVDetails.map((cvDetails, key) => {
                        return <CVDisplay key={key} cvDetails={cvDetails} />
                    })
                }
            </div>
        </div>
    );
}

export default CVGroupDisplay;