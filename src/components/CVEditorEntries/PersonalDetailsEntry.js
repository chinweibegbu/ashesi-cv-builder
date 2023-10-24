import React from 'react';

function PersonalDetailsEntry({ sectionTag }) {
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
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-email"}>Email Address</label>
                    <input type="text" id={sectionTag + "-email"} placeholder="e.g. chinwe.ibegbu@gmail.com"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-phone"}>Phone</label>
                    <input type="text" id={sectionTag + "-phone"} placeholder="e.g. +234 706 056 0968"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-city"}>City</label>
                    <input type="text" id={sectionTag + "-city"} placeholder="e.g. Lagos"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-country"}>Country</label>
                    <input type="text" id={sectionTag + "-country"} placeholder="e.g. Nigeria"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-nationality"}>Nationality</label>
                    <input type="text" id={sectionTag + "-nationality"} placeholder="e.g. Nigerian"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-linkedin"}>LinkedIn Username</label>
                    <input type="text" id={sectionTag + "-linkedin"} placeholder="e.g. chinwe-ibegbu"></input>
                </div>
            </form>
        </>
    );
}

export default PersonalDetailsEntry;