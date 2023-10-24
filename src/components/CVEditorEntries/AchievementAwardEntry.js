import React from "react";

function AchievementAwardEntry({ sectionTag, handleEntryAddition }) {
    return (
        <>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-fname"}>AA First Name</label>
                    <input type="text" id={sectionTag + "-fname"} placeholder="e.g. Chinwe"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-lname"}>AA Last Name</label>
                    <input type="text" id={sectionTag + "-lname"} placeholder="e.g. Ibegbu"></input>
                </div>
            </form>
            <div className="add-entry d-flex align-content-center mt-1" onClick={(key) => {handleEntryAddition(key)}}>
                <i className="bi-plus-circle me-1" />
                <p>Add achievement/award</p>
            </div>
        </>
    );
}

export default AchievementAwardEntry;