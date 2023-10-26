import React, { useState } from "react";
import PersonalDetailsEntry from "./CVEditorEntries/PersonalDetailsEntry";
import EducationEntry from "./CVEditorEntries/EducationEntry";
import AchievementAwardEntry from "./CVEditorEntries/AchievementAwardEntry";
import WorkExperienceEntry from "./CVEditorEntries/WorkExperienceEntry";
import SkillEntry from "./CVEditorEntries/SkillEntry";
import { educationEntryTemplate } from "../data/entryTemplates";

function CVEditorSection({ sectionName, isExpanded, cvDetails, setCvDetails }) {
    const entryDetails = {
        "Personal Details": {
            component: PersonalDetailsEntry,
            id: "PersonalDetails",
            sectionTag: "PD"
        },
        "Education": {
            component: EducationEntry,
            id: "Education",
            sectionTag: "ED",
            clear: (id) => {
                // code
            },
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    education: [
                        ...cvDetails.education.slice(0, id),
                        {
                            ...cvDetails.education[id],
                            active: false,
                        },
                        ...cvDetails.education.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add educational experience"
        },
        "Achievements & Awards": {
            component: AchievementAwardEntry,
            id: "AchievementsAwards",
            sectionTag: "AA",
            addEntryText: "Add achievement/award"
        },
        "Work Experience": {
            component: WorkExperienceEntry,
            id: "WorkExperience",
            sectionTag: "WK",
            addEntryText: "Add work experience"
        },
        "Skills": {
            component: SkillEntry,
            id: "Skills",
            sectionTag: "SK",
            addEntryText: "Add skill"
        }
    }

    const EntryComponent = entryDetails[sectionName]['component'];
    const id = entryDetails[sectionName]['id'];
    const sectionTag = entryDetails[sectionName]['sectionTag'];
    const addEntryButton = (sectionTag !== "PD") ? ( <div className={"add-entry d-flex align-content-center"} onClick={() => handleEntryAddition(sectionTag)}>
        <i className="bi-plus-circle me-1" />
        <p>{entryDetails[sectionName]['addEntryText']}</p>
    </div> ) : <></>

    // Handle entry addition
    const [entryComponents, setEntryComponents] = useState([EntryComponent]);
    const handleEntryAddition = (sectionTag) => {
        // Add entry to array of entries for section
        setEntryComponents([...entryComponents, EntryComponent]);

        // Add entry to array of entries in state in CVEditor
        const entryTemplateDictionary = {
            "ED": educationEntryTemplate
        }
        setCvDetails({
            ...cvDetails,
            education: [
                ...cvDetails.education,
                { ...entryTemplateDictionary[sectionTag] }
            ]
        });
    }

    // Handle entry clear
    const handleEntryClear = (event) => {
        // code
    }

    // Handle entry deletion
    const handleEntryDeletion = (event, id, sectionName) => {
        event.preventDefault();
        entryDetails[sectionName].deactivate(id);
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={id}>
                <button className={isExpanded ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#" + sectionTag + "-section"} aria-expanded={isExpanded} aria-controls={sectionTag + "-section"}>
                    {sectionName}
                </button>
            </h2>
            <div id={sectionTag + "-section"} className={isExpanded ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={id} data-bs-parent="#detail-sections">
                <div className="accordion-body">
                    {
                        entryComponents.map((SingleEntryComponent, key) => {
                            // Only render active entries
                            if ((cvDetails.education[key].active) === true) {
                                return <SingleEntryComponent key={key} id={key} sectionTag={sectionTag} handleEntryClear={handleEntryClear} handleEntryDeletion={handleEntryDeletion} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                            } else {
                                return <div key={key}></div>
                            }
                        })
                    }
                    { addEntryButton }
                </div>
            </div>
        </div>
    );
}

export default CVEditorSection;