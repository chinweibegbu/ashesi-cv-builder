import React, { useRef} from "react";
// import WorkEntryDescription from "./WorkEntryDescription.js";
import { countryNames } from "../../utils/countryNames.js";

function WorkExperienceEntry({ id, sectionTag, handleEntryClear, handleEntryDeletion, cvDetails, setCvDetails }) {
    const handleClick = () => {
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

    // SOURCE: https://jsfiddle.net/abhiagrawal87/m39xt/
    const handleFocus = (event) => {
        if (event.target.value === "") {
            event.target.value += " • ";
        }
    }
    const handleKeyUp = (event) => {
        // If "Enter" key is pressed, add bullet point
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == "13") {
            event.target.value += " • ";
        }

        // Get current textarea value
        let descriptionText = event.target.value;
        if (descriptionText.substr(descriptionText.length - 1) === "\n") {
            event.target.value = descriptionText.substring(0, descriptionText.length - 1);
        }
    }

    return (
        <div id={id}>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-company-name"}>Company Name</label>
                    <input type="text" id={sectionTag + "-company-name"} placeholder="e.g. GenKey" value={cvDetails.workExperience[Number(id)].company_name} onChange={(e) => handleChange(e, "company_name")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-job-title"}>Job Title</label>
                    <input type="text" id={sectionTag + "-job-title"} placeholder="e.g. Technology Intern" value={cvDetails.workExperience[Number(id)].title} onChange={(e) => handleChange(e, "title")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-company-city"}>State/Region/City</label>
                    <input type="text" id={sectionTag + "-company-city"} placeholder="e.g. Accra" value={cvDetails.workExperience[Number(id)].company_city} onChange={(e) => handleChange(e, "company_city")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-company-country"}>Country</label>
                    <select className="form-select" id={sectionTag + "-company-country"} aria-label={countryNames[0]} value={cvDetails.workExperience[Number(id)].company_country} onChange={(e) => handleSelect(e, "company_country")}>
                        {
                            countryNames.map((countryName, key) => {
                                return <option key={key} value={countryName}>{countryName}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-start-date"}>Start Date</label>
                    <input type="date" id={sectionTag + "-start-date"} value={cvDetails.workExperience[Number(id)].start_date} onChange={(e) => handleChange(e, "start_date")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-end-date"}>End Date</label>
                    <input type="date" id={sectionTag + "-end-date"} disabled={cvDetails.workExperience[Number(id)].ongoing} value={cvDetails.workExperience[Number(id)].end_date} onChange={(e) => handleChange(e, "end_date")}></input>
                </div>
                <div className="form-group col-6 offset-6 d-flex mb-2">
                    <input type="checkbox" id="work-ongoing" name="work-ongoing" value="work-ongoing" checked={cvDetails.workExperience[Number(id)].ongoing} onChange={handleClick}></input>
                    <label htmlFor="work-ongoing" className='ms-1'>Still working at this company</label>
                </div>
                <div className="form-group col-12 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-description"}>Description</label>
                    <textarea
                        className="w-100 p-2"
                        id={sectionTag + "-description"}
                        name={sectionTag + "-description"}
                        rows="5"
                        placeholder="Maintain your pending tasks"
                        onFocus={(e) => handleFocus(e)}
                        onKeyUp={(e) => handleKeyUp(e)}
                        value={cvDetails.workExperience[Number(id)].description}
                        onChange={(e) => handleChange(e, "description")}>
                    </textarea>
                </div>
                <div className="form-group col-12 d-flex justify-content-end align-items-end mb-2">
                    {/* <button className='button section-button clear-button btn me-1' onClick={(event) => handleEntryClear(event, id, "Work Experience")}>Clear Entry</button> */}
                    <button className='button section-button delete-button btn' onClick={(event) => handleEntryDeletion(event, id, "Work Experience")}>Delete Entry</button>
                </div>
            </form>
        </div>
    );
}

export default WorkExperienceEntry;