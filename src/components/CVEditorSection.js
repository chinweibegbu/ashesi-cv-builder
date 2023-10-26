import React, { useState } from "react";
import PersonalDetailsEntry from "./CVEditorEntries/PersonalDetailsEntry";
import EducationEntry from "./CVEditorEntries/EducationEntry";
import AchievementAwardEntry from "./CVEditorEntries/AchievementAwardEntry";
import WorkExperienceEntry from "./CVEditorEntries/WorkExperienceEntry";
import SkillEntry from "./CVEditorEntries/SkillEntry";
import { educationEntryTemplate, achievementAwardEntryTemplate, workExperienceEntryTemplate, skillEntryTemplate } from "../data/entryTemplates";

function CVEditorSection({ sectionName, isExpanded, cvDetails, setCvDetails }) {
    const entryDetails = {
        "Personal Details": {
            component: PersonalDetailsEntry,
            id: "PersonalDetails",
            cvDetailsKey: "header",
            sectionTag: "PD"
        },
        "Education": {
            component: EducationEntry,
            id: "Education",
            cvDetailsKey: "education",
            sectionTag: "ED",
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
            addEntryText: "Add educational experience",
            template: educationEntryTemplate
        },
        "Achievements & Awards": {
            component: AchievementAwardEntry,
            id: "AchievementsAwards",
            cvDetailsKey: "achievementsAwards",
            sectionTag: "AA",
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    achievementsAwards: [
                        ...cvDetails.achievementsAwards.slice(0, id),
                        {
                            ...cvDetails.achievementsAwards[id],
                            active: false,
                        },
                        ...cvDetails.achievementsAwards.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add achievement/award",
            template: achievementAwardEntryTemplate
        },
        "Work Experience": {
            component: WorkExperienceEntry,
            id: "WorkExperience",
            cvDetailsKey: "workExperience",
            sectionTag: "WK",
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    workExperience: [
                        ...cvDetails.workExperience.slice(0, id),
                        {
                            ...cvDetails.workExperience[id],
                            active: false,
                        },
                        ...cvDetails.workExperience.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add work experience",
            template: workExperienceEntryTemplate
        },
        "Skills": {
            component: SkillEntry,
            id: "Skills",
            cvDetailsKey: "skills",
            sectionTag: "SK",
            deactivate: (id) => {
                setCvDetails({
                    ...cvDetails,
                    skills: [
                        ...cvDetails.skills.slice(0, id),
                        {
                            ...cvDetails.skills[id],
                            active: false,
                        },
                        ...cvDetails.skills.slice(id + 1)
                    ]
                });
            },
            addEntryText: "Add skill",
            template: skillEntryTemplate
        }
    }

    const EntryComponent = entryDetails[sectionName]['component'];
    const id = entryDetails[sectionName]['id'];
    const sectionTag = entryDetails[sectionName]['sectionTag'];
    const addEntryButton = (sectionTag !== "PD") ?
        (<div className={"add-entry d-flex align-content-center"} onClick={() => handleEntryAddition(sectionName)}>
            <i className="bi-plus-circle me-1" />
            <p>{entryDetails[sectionName]['addEntryText']}</p>
        </div>) : <></>

    // Handle entry addition
    const [entryComponents, setEntryComponents] = useState([EntryComponent]);
    const handleEntryAddition = (sectionName) => {
        // Add entry to array of entries for section
        setEntryComponents([...entryComponents, EntryComponent]);

        // Update cvDetails state manager
        const cvDetailsKey = entryDetails[sectionName].cvDetailsKey;
        const template = entryDetails[sectionName].template;
        setCvDetails({
            ...cvDetails,
            [cvDetailsKey]: [
                ...cvDetails[cvDetailsKey],
                { ...template }
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
                            const cvDetailsKey = entryDetails[sectionName].cvDetailsKey;
                            const entry = cvDetails[cvDetailsKey][key];
                            // Render header as provided
                            if (sectionTag === "PD") {
                                return <SingleEntryComponent key={key} id={key} sectionTag={sectionTag} handleEntryClear={handleEntryClear} handleEntryDeletion={handleEntryDeletion} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                            } else {
                                // Only render active entries
                                if (entry.active) {
                                    return <SingleEntryComponent key={key} id={key} sectionTag={sectionTag} handleEntryClear={handleEntryClear} handleEntryDeletion={handleEntryDeletion} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                                } else {
                                    return <div key={key}></div>
                                }
                            }
                        })
                    }
                    {addEntryButton}
                </div>
            </div>
        </div>
    );
}

export default CVEditorSection;