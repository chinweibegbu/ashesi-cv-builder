import React, { useState } from "react";
import { countryNames } from "../../data/countryNames.js";

function WorkExperienceEntry({ id, sectionTag, handleEntryClear, handleEntryDeletion, cvDetails, setCvDetails }) {
    const [ongoing, setOngoing] = useState(false);
    const handleClick = () => {
        setOngoing(prevState => !prevState);
        setCvDetails({
            ...cvDetails,
            workExperience: [
                ...cvDetails.workExperience.slice(0, id),
                {
                    ...cvDetails.workExperience[id],
                    ongoing: !(cvDetails.workExperience[id].ongoing),
                },
                ...cvDetails.workExperience.slice(id + 1)
            ]
        });
    }
    const handleChange = (event, field) => {
        setCvDetails({
            ...cvDetails,
            workExperience: [
                ...cvDetails.workExperience.slice(0, id),
                {
                    ...cvDetails.workExperience[id],
                    [field]: event.target.value,
                },
                ...cvDetails.workExperience.slice(id + 1)
            ]
        });
    }
    const handleSelect = (event, field) => {
        setCvDetails({
            ...cvDetails,
            workExperience: [
                ...cvDetails.workExperience.slice(0, id),
                {
                    ...cvDetails.workExperience[id],
                    [field]: event.target.value,
                },
                ...cvDetails.workExperience.slice(id + 1)
            ]
        });
    }

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-company-name"}>Company Name</label>
                    <input type="text" id={sectionTag + "-company-name"} placeholder="e.g. GenKey" value={cvDetails.workExperience[Number(id)].companyName} onChange={(e) => handleChange(e, "companyName")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-job-title"}>Job Title</label>
                    <input type="text" id={sectionTag + "-job-title"} placeholder="e.g. Technology Intern" value={cvDetails.workExperience[Number(id)].title} onChange={(e) => handleChange(e, "title")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-company-city"}>State/Region/City</label>
                    <input type="text" id={sectionTag + "-company-city"} placeholder="e.g. Accra" value={cvDetails.workExperience[Number(id)].companyCity} onChange={(e) => handleChange(e, "companyCity")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-company-country"}>Country</label>
                    <select className="form-select" id={sectionTag + "-company-country"} aria-label={countryNames[0]} value={cvDetails.workExperience[Number(id)].companyCountry} onChange={(e) => handleSelect(e, "companyCountry")}>
                        {
                            countryNames.map((countryName, key) => {
                                return <option key={key} value={countryName}>{countryName}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-start-date"}>Start Date</label>
                    <input type="date" id={sectionTag + "-start-date"} value={cvDetails.workExperience[Number(id)].startDate} onChange={(e) => handleChange(e, "startDate")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-end-date"}>End Date</label>
                    <input type="date" id={sectionTag + "-end-date"} disabled={ongoing} value={cvDetails.workExperience[Number(id)].endDate} onChange={(e) => handleChange(e, "endDate")}></input>
                </div>
                <div className="form-group col-6 offset-6 d-flex mb-2">
                    <input type="checkbox" id="work-ongoing" name="work-ongoing" value="work-ongoing" checked={ongoing} onChange={handleClick}></input>
                    <label htmlFor="work-ongoing" className='ms-1'>Still working at this company</label>
                </div>
                <div className="form-group col-12 d-flex justify-content-end align-items-end mb-2">
                    {/* <button className='button clear-button btn me-1' onClick={(event) => handleEntryClear(event, id, "Work Experience")}>Clear Entry</button> */}
                    <button className='button delete-button btn' onClick={(event) => handleEntryDeletion(event, id, "Work Experience")}>Delete Entry</button>
                </div>
            </form>
        </div>
    );
}

export default WorkExperienceEntry;