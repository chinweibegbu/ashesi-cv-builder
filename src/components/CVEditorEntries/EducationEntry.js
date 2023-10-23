import React from 'react';

function EducationEntry({ sectionId, sectionTag }) {
    return (
        <div id={sectionTag+"-section"} className="accordion-collapse collapse" aria-labelledby={sectionId} data-bs-parent="#detail-sections">
            <div className="accordion-body">
                <form className="bordered row">
                    <div className="form-group col-md-6 d-flex flex-column mb-2">
                        <label htmlFor={sectionTag+"-fname"}>First Name</label>
                        <input type="text" id={sectionTag+"-fname"} placeholder="e.g. Chinwe"></input>
                    </div>
                    <div className="form-group col-md-6 d-flex flex-column">
                        <label htmlFor={sectionTag+"-lname"}>Last Name</label>
                        <input type="text" id={sectionTag+"-lname"} placeholder="e.g. Ibegbu"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EducationEntry;