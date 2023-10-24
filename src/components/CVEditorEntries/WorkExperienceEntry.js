import React from "react";

function WorkExperienceEntry({ id, sectionTag, handleEntryAddition }) {
    const makeInvisible = (handleEntryAddition) ? "" : " invisible";

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-fname"}>WK First Name</label>
                    <input type="text" id={sectionTag + "-fname"} placeholder="e.g. Chinwe"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-lname"}>WK Last Name</label>
                    <input type="text" id={sectionTag + "-lname"} placeholder="e.g. Ibegbu"></input>
                </div>
            </form>
            <div className={"add-entry d-flex align-content-center mt-1"+makeInvisible} onClick={handleEntryAddition}>
                <i className="bi-plus-circle me-1" />
                <p>Add work experience</p>
            </div>
        </div>
    );
}

export default WorkExperienceEntry;