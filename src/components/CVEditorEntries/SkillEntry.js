import React from "react";

function SkillEntry({ sectionId, sectionTag }) {
    return (
        <div id={sectionTag+"-section"} className="accordion-collapse collapse" aria-labelledby={sectionId} data-bs-parent="#detail-sections">
            <div className="accordion-body">
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
            </div>
        </div>
    );
}

export default SkillEntry;