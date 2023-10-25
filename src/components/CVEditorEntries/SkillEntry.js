import React, { useState } from "react";
import { skillLevels } from "../../data/skillLevels";

function SkillEntry({ id, sectionTag, handleEntryAddition }) {
    const [skillType, setSkillType] = useState(false);
    const handleSelect = (event) => {
        setSkillType(event.target.value);
    }

    const makeInvisible = (handleEntryAddition) ? "" : " invisible";

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-name"}>Skill Name</label>
                    <input type="text" id={sectionTag + "-name"} placeholder="e.g. Python"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-skill-level"}>Skill Level</label>
                    <select className="form-select" id={sectionTag + "-skill-level"} aria-label={skillLevels[0]} defaultValue={skillLevels[0]}>
                        {
                            skillLevels.map((skillLevel, key) => {
                                return <option key={key} value={skillLevel}>{skillLevel}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-skill-type"}>Skill Type</label>
                    <select className="form-select" id={sectionTag + "-skill-type"} aria-label="Hard Skill" value={skillType} onChange={handleSelect}>
                        <option value="Hard Skill">Hard Skill</option>
                        <option value="Soft Skill">Soft Skill</option>
                    </select>
                </div>
            </form>
            <div className={"add-entry d-flex align-content-center mt-1" + makeInvisible} onClick={handleEntryAddition}>
                <i className="bi-plus-circle me-1" />
                <p>Add skill</p>
            </div>
        </div>
    );
}

export default SkillEntry;