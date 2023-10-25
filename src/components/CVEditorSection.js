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
            sectionTag: "ED"
        },
        "Achievements & Awards": {
            component: AchievementAwardEntry,
            id: "AchievementsAwards",
            sectionTag: "AA"
        },
        "Work Experience": {
            component: WorkExperienceEntry,
            id: "WorkExperience",
            sectionTag: "WK"
        },
        "Skills": {
            component: SkillEntry,
            id: "Skills",
            sectionTag: "SK"
        }
    }

    const EntryComponent = entryDetails[sectionName]['component'];
    const id = entryDetails[sectionName]['id'];
    const sectionTag = entryDetails[sectionName]['sectionTag'];

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
                {...entryTemplateDictionary[sectionTag]}
            ]
        });
    }

    // Handle entry clear

    // Handle entry deletion
    const handleEntryDeletion = () => {
        // code
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
                            if (key === (entryComponents.length - 1)) {
                                return <SingleEntryComponent key={key} id={key} sectionTag={sectionTag} handleEntryDeletion={handleEntryDeletion} handleEntryAddition={handleEntryAddition} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                            } else {
                                return <SingleEntryComponent key={key} id={key} sectionTag={sectionTag} handleEntryDeletion={handleEntryDeletion} handleEntryAddition={null} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CVEditorSection;