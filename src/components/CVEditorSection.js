import React, { useState, useEffect } from "react";
import { useSectionDetails } from "../utils/section-utils.js";
import CVEntryGroup from "./CVEntryGroup.js";

function CVEditorSection({ sectionName, isExpanded, cvDetails, setCvDetails, newCV }) {
    const sectionDetails = useSectionDetails(cvDetails, setCvDetails);
    const [componentsLoading, setComponentsLoading] = useState(true);

    // Get the current section's React component, frontend ID and section tag
    const EntryComponent = sectionDetails[sectionName]['component'];
    const id = sectionDetails[sectionName]['id'];
    const sectionTag = sectionDetails[sectionName]['sectionTag'];

    // Handle entry rendering
    const [entryComponents, setEntryComponents] = useState([]);

    // Handle entry addition
    const handleEntryAddition = (sectionName) => {
        // Add entry to array of entries for section
        setEntryComponents([...entryComponents, EntryComponent]);

        // Update cvDetails state
        const cvDetailsKey = sectionDetails[sectionName].cvDetailsKey;
        const template = sectionDetails[sectionName].template;
        setCvDetails({
            ...cvDetails,
            [cvDetailsKey]: [
                ...cvDetails[cvDetailsKey],
                { ...template }
            ]   
        });
    }

    useEffect(() => {
        if ((!newCV) && (sectionTag !== "PD")) {
            // If this is an existing CV, start with n empty components
            const initialEntryComponents = [];
            const cvDetailsKey = sectionDetails[sectionName].cvDetailsKey;
            cvDetails[cvDetailsKey].forEach(e => {
                initialEntryComponents.push(EntryComponent);
            });
            setEntryComponents(initialEntryComponents);
        } else {
            // If this is a new CV, start with an single empty component
            setEntryComponents([EntryComponent]);
        }
        setComponentsLoading(false);
    }, []);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={id}>
                <button className={isExpanded ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#" + sectionTag + "-section"} aria-expanded={isExpanded} aria-controls={sectionTag + "-section"}>
                    {sectionName}
                </button>
            </h2>
            <CVEntryGroup componentsLoading={componentsLoading} id={id} isExpanded={isExpanded} sectionName={sectionName} sectionTag={sectionTag} cvDetails={cvDetails} setCvDetails={setCvDetails} entryComponents={entryComponents} handleEntryAddition={handleEntryAddition} />
        </div>

    );
}

export default CVEditorSection;