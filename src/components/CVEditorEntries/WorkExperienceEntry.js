import React, { useState } from "react";
import { countryNames } from "../../data/countryNames";

function WorkExperienceEntry({ id, sectionTag }) {
    const [ongoing, setOngoing] = useState(false);
    const handleClick = (event) => {
        setOngoing(prevState => !prevState);
    }

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-job-title"}>Job Title</label>
                    <input type="text" id={sectionTag + "-job-title"} placeholder="e.g. Technology Intern"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-company-name"}>Company Name</label>
                    <input type="text" id={sectionTag + "-company-name"} placeholder="e.g. GenKey"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-company-city"}>State/Region/City</label>
                    <input type="text" id={sectionTag + "-company-city"} placeholder="e.g. Accra"></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-company-country"}>Country</label>
                    <select className="form-select" id={sectionTag + "-company-country"} aria-label={countryNames[0]} defaultValue={countryNames[0]}>
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
                    <input type="checkbox" id="work-ongoing" name="work-ongoing" value="work-ongoing" checked={ongoing} onChange={handleClick}></input>
                    <label htmlFor="work-ongoing" className='ms-1'>Still working at this company</label>
                </div>
            </form>
        </div>
    );
}

export default WorkExperienceEntry;