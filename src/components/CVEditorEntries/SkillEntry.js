import React from "react";
import { skillLevels } from "../../data/skillLevels";

function SkillEntry({ id, sectionTag, handleEntryClear, handleEntryDeletion, cvDetails, setCvDetails }) {
    const handleChange = (event, field) => {
        setCvDetails({
            ...cvDetails,
            skills: [
                ...cvDetails.skills.slice(0, id),
                {
                    ...cvDetails.skills[id],
                    [field]: event.target.value,
                },
                ...cvDetails.skills.slice(id+1)
            ]
        });
    }
    const handleSelect = (event, field) => {
        setCvDetails({
            ...cvDetails,
            skills: [
                ...cvDetails.skills.slice(0, id),
                {
                    ...cvDetails.skills[id],
                    [field]: event.target.value,
                },
                ...cvDetails.skills.slice(id+1)
            ]
        });
    }

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-name"}>Skill Name</label>
                    <input type="text" id={sectionTag + "-name"} placeholder="e.g. Python" value={cvDetails.skills[Number(id)].name} onChange={(e) => handleChange(e, "name")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-skill-level"}>Skill Level</label>
                    <select className="form-select" id={sectionTag + "-skill-level"} aria-label={skillLevels[0]} value={cvDetails.skills[Number(id)].level} onChange={(e) => handleSelect(e, "level")}>
                        {
                            skillLevels.map((skillLevel, key) => {
                                return <option key={key} value={skillLevel}>{skillLevel}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-skill-type"}>Skill Type</label>
                    <select className="form-select" id={sectionTag + "-skill-type"} aria-label="Hard Skill" value={cvDetails.skills[Number(id)].type} onChange={(e) => handleSelect(e, "type")}>
                        <option value="Hard Skill">Hard Skill</option>
                        <option value="Soft Skill">Soft Skill</option>
                    </select>
                </div>

                <div className="form-group col-12 d-flex justify-content-end align-items-end mb-2">
                    {/* <button className='button clear-button btn me-1' onClick={(event) => handleEntryClear(event, id, "Skills")}>Clear Entry</button> */}
                    <button className='button delete-button btn' onClick={(event) => handleEntryDeletion(event, id, "Skills")}>Delete Entry</button>
                </div>
            </form>
        </div>
    );
}

export default SkillEntry;