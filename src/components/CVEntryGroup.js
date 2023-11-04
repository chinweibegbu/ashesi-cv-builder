import React from "react";
import { useSectionDetails } from "../utils/section-utils.js";

function CVEntryGroup({ componentsLoading, id, isExpanded, sectionName, sectionTag, cvDetails, setCvDetails, entryComponents, handleEntryAddition }) {
    const sectionDetails = useSectionDetails(cvDetails, setCvDetails);

    const addEntryButton = (sectionTag !== "PD") ?
        (<div className={"add-entry d-flex align-content-center"} onClick={() => handleEntryAddition(sectionName)}>
            <i className="bi-plus-circle me-1" />
            <p>{sectionDetails[sectionName]['addEntryText']}</p>
        </div>) : <></>

    // Handle entry clear
    const handleEntryClear = (event) => {
        // code
    }

    // Handle entry deletion
    const handleEntryDeletion = (event, id, sectionName) => {
        event.preventDefault();
        sectionDetails[sectionName].deactivate(id);
    }

    return (
        <div id={sectionTag + "-section"} className={isExpanded ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={id} data-bs-parent="#detail-sections">
            <div className="accordion-body">
                {componentsLoading ?
                    "Loading..." :
                    entryComponents.map((SingleEntryComponent, key) => {
                        // Render header as provided
                        if (sectionTag === "PD") {
                            return <SingleEntryComponent key={key} id={key} sectionTag={sectionTag} handleEntryClear={handleEntryClear} handleEntryDeletion={handleEntryDeletion} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        } else {
                            const cvDetailsKey = sectionDetails[sectionName].cvDetailsKey;
                            const entry = cvDetails[cvDetailsKey][key];

                            // Only render active entries
                            const databaseId = entry.id ? entry.id : null;
                            return <SingleEntryComponent key={key} id={key} databaseId={databaseId} sectionTag={sectionTag} handleEntryClear={handleEntryClear} handleEntryDeletion={handleEntryDeletion} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        }
                    })
                }
                {addEntryButton}
            </div>
        </div>
    );
}

export default CVEntryGroup;