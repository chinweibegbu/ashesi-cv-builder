import React from "react";
import PersonalDetailsEntry from "./CVEditorEntries/PersonalDetailsEntry";
import EducationEntry from "./CVEditorEntries/EducationEntry";
import AchievementAwardEntry from "./CVEditorEntries/AchievementAwardEntry";
import WorkExperienceEntry from "./CVEditorEntries/WorkExperienceEntry";
import SkillEntry from "./CVEditorEntries/SkillEntry";

function CVEditorSection({ sectionName, isExpanded }) {
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
    const sectionTag =  entryDetails[sectionName]['sectionTag'];
    
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={id}>
                <button className={isExpanded ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={"#"+sectionTag+"-section"} aria-expanded={isExpanded} aria-controls={sectionTag+"-section"}>
                    {sectionName}
                </button>
            </h2>
            { 
                <EntryComponent sectionId={id} sectionTag={sectionTag} />
            }
        </div>
    );
}

export default CVEditorSection;