import React from "react";

function SkillEntry({ sectionTag, handleEntryAddition }) {
    return (
        <>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-first-name"}>First Name</label>
                    <input type="text" id={sectionTag + "-first-name"} placeholder="e.g. Chinwe"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-last-name"}>Last Name</label>
                    <input type="text" id={sectionTag + "-last-name"} placeholder="e.g. Ibegbu"></input>
                </div>
            </form>
            <div className="add-entry d-flex align-content-center mt-1" onClick={handleEntryAddition}>
                <i className="bi-plus-circle me-1" />
                <p>Add skill</p>
            </div>
        </>
    );
}

export default SkillEntry;