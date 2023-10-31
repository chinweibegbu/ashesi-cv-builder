import React from "react";
import '../styles/CVGroupDisplay.css';
import CVDisplay from "./CVDisplay.js";

function CVGroupDisplay({ subHeadingText, allCVDetails }) {

    const placeholder = (allCVDetails.length===0) ? <p>No CVs yet</p> : <></>;
    return (
        <div className="cv-display-group mt-2 row-flex bordered">
            <p className="row-flex sub-heading">{subHeadingText}</p>
            {placeholder}
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