import React, { useState } from 'react';
import { majors } from '../../data/majors';
import { educationLevels } from '../../data/educationLevels';
import { countryNames } from '../../data/countryNames';

function EducationEntry({ id, sectionTag, handleEntryDeletion, handleEntryAddition }) {
    const [ongoing, setOngoing] = useState(false);
    const handleClick = (event) => {
        setOngoing(prevState => !prevState);
    }

    const makeInvisible = (handleEntryAddition) ? "" : " invisible";

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-institution-name"}>Institution Name</label>
                    <input type="text" id={sectionTag + "-institution-name"} placeholder="e.g. Loyola Jesuit College"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-education-level"}>Education Level</label>
                    <select className="form-select" id={sectionTag + "-education-level"} aria-label={educationLevels[0]} defaultValue={educationLevels[0]}>
                        {
                            educationLevels.map((educationLevel, key) => {
                                return <option key={key} value={educationLevel}>{educationLevel}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-major"}>Major</label>
                    <select className="form-select" id={sectionTag + "-major"} aria-label={majors[0]} defaultValue={majors[0]}>
                        {
                            majors.map((major, key) => {
                                return <option key={key} value={major}>{major}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-location"}>Location</label>
                    <select className="form-select" id={sectionTag + "-location"} aria-label={countryNames[0]} defaultValue={countryNames[0]}>
                        {
                            countryNames.map((countryName, key) => {
                                return <option key={key} value={countryName}>{countryName}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-start-date"}>Start Date</label>
                    <input type="date" id={sectionTag + "-start-date"}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-end-date"}>End Date</label>
                    <input type="date" id={sectionTag + "-end-date"} disabled={ongoing}></input>
                </div>
                <div className="form-group col-6 offset-6 d-flex mb-2">
                    <input type="checkbox" id="education-ongoing" name="education-ongoing" value="education-ongoing" checked={ongoing} onClick={handleClick}></input>
                    <label htmlFor="education-ongoing" className='ms-1'>Still attending this institution</label>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-gpa"}>Cumulative GPA (out of 4.0)</label>
                    <input type="text" id={sectionTag + "-gpa"} placeholder="e.g. 2.35"></input>
                </div>
                <div className="form-group col-md-6 d-flex justify-content-end align-items-end mb-2">
                    <button className='button clear-button btn me-1'>Clear Entry</button>
                    <button className='button delete-button btn' onClick={() => handleEntryDeletion(id)}>Delete Entry</button>
                </div>
            </form>
            <div className={"add-entry d-flex align-content-center mt-1" + makeInvisible} onClick={handleEntryAddition}>
                <i className="bi-plus-circle me-1" />
                <p>Add educational experience</p>
            </div>
        </div>
    );
}

export default EducationEntry;