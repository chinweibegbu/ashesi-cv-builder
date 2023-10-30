import React, { useState } from 'react';
import { majors } from '../../data/majors.js';
import { educationLevels } from '../../data/educationLevels.js';
import { countryNames } from '../../data/countryNames.js';

function EducationEntry({ id, sectionTag, handleEntryClear, handleEntryDeletion, cvDetails, setCvDetails }) {
    const [ongoing, setOngoing] = useState(false);
    const handleClick = () => {
        setOngoing(prevState => !prevState);
        setCvDetails({
            ...cvDetails,
            education: [
                ...cvDetails.education.slice(0, id),
                {
                    ...cvDetails.education[id],
                    ongoing: !(cvDetails.education[id].ongoing),
                },
                ...cvDetails.education.slice(id+1)
            ]
        });
    }
    const handleChange = (event, field) => {
        setCvDetails({
            ...cvDetails,
            education: [
                ...cvDetails.education.slice(0, id),
                {
                    ...cvDetails.education[id],
                    [field]: event.target.value,
                },
                ...cvDetails.education.slice(id+1)
            ]
        });
    }
    const handleSelect = (event, field) => {
        setCvDetails({
            ...cvDetails,
            education: [
                ...cvDetails.education.slice(0, id),
                {
                    ...cvDetails.education[id],
                    [field]: event.target.value,
                },
                ...cvDetails.education.slice(id+1)
            ]
        });
    }

    return (
        <div id={id} className='mt-1'>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-institution-name"}>Institution Name</label>
                    <input type="text" id={sectionTag + "-institution-name"} placeholder="e.g. Loyola Jesuit College" value={cvDetails.education[Number(id)].name} onChange={(e) => handleChange(e, "name")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-education-level"}>Education Level</label>
                    <select className="form-select" id={sectionTag + "-education-level"} aria-label={educationLevels[0]} value={cvDetails.education[Number(id)].degree} onChange={(e) => handleSelect(e, "degree")}>
                        {
                            educationLevels.map((educationLevel, key) => {
                                return <option key={key} value={educationLevel}>{educationLevel}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-major"}>Major</label>
                    <select className="form-select" id={sectionTag + "-major"} aria-label={majors[0]}  value={cvDetails.education[Number(id)].major} onChange={(e) => handleSelect(e, "major")}>
                        {
                            majors.map((major, key) => {
                                return <option key={key} value={major}>{major}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-gpa"}>Cumulative GPA (out of 4.0)</label>
                    <input type="text" id={sectionTag + "-gpa"} placeholder="e.g. 2.35" value={cvDetails.education[Number(id)].cgpa} onChange={(e) => handleChange(e, "cgpa")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-city"}>State/Region/City</label>
                    <input type="text" id={sectionTag + "-city"} placeholder="e.g. Lagos" value={cvDetails.education[Number(id)].city} onChange={(e) => handleChange(e, "city")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-country"}>Country</label>
                    <select className="form-select" id={sectionTag + "-country"} aria-label={countryNames[0]} value={cvDetails.education[Number(id)].country} onChange={(e) => handleSelect(e, "country")}>
                        {
                            countryNames.map((countryName, key) => {
                                return <option key={key} value={countryName}>{countryName}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-start-date"}>Start Date</label>
                    <input type="date" id={sectionTag + "-start-date"} value={cvDetails.education[Number(id)].startDate} onChange={(e) => handleChange(e, "startDate")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-end-date"}>End Date</label>
                    <input type="date" id={sectionTag + "-end-date"} disabled={ongoing} value={cvDetails.education[Number(id)].endDate} onChange={(e) => handleChange(e, "endDate")}></input>
                </div>
                <div className="form-group col-6 offset-6 d-flex mb-2">
                    <input type="checkbox" id="education-ongoing" name="education-ongoing" value="education-ongoing" checked={ongoing} onChange={handleClick}></input>
                    <label htmlFor="education-ongoing" className='ms-1'>Still attending this institution</label>
                </div>
                
                <div className="form-group col-12 d-flex justify-content-end align-items-end mb-2">
                    {/* <button className='button clear-button btn me-1' onClick={(event) => handleEntryClear(event, id, "Education")}>Clear Entry</button> */}
                    <button className='button delete-button btn' onClick={(event) => handleEntryDeletion(event, id, "Education")}>Delete Entry</button>
                </div>
            </form>
        </div>
    );
}

export default EducationEntry;