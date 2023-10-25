import React, { useState } from 'react';
import { countryNames } from '../../data/countryNames';

function PersonalDetailsEntry({ sectionTag, cvDetails, setCvDetails }) {
    const handleChange = (event, field) => {
        setCvDetails({
            ...cvDetails,
            header: {
                ...cvDetails.header,
                [field]: event.target.value
            }
        });
    }
    const [country, setCountry] = useState(countryNames[0]);
    const handleCountrySelect = (event) => {
        setCountry(event.target.value);
        setCvDetails({
            ...cvDetails,
            header: {
                ...cvDetails.header,
                country: event.target.value
            }
        });
    }

    return (
        <>
            <form className="bordered row">
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-first-name"}>First Name</label>
                    <input type="text" id={sectionTag + "-first-name"} placeholder="e.g. Chinwe" value={cvDetails.header.firstName} onChange={(e) => handleChange(e, "firstName")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-last-name"}>Last Name</label>
                    <input type="text" id={sectionTag + "-last-name"} placeholder="e.g. Ibegbu" value={cvDetails.header.lastName} onChange={(e) => handleChange(e, "lastName")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-email"}>Email Address</label>
                    <input type="text" id={sectionTag + "-email"} placeholder="e.g. chinwe.ibegbu@gmail.com" value={cvDetails.header.email} onChange={(e) => handleChange(e, "email")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-phone"}>Phone</label>
                    <input type="text" id={sectionTag + "-phone"} placeholder="e.g. +234 706 056 0968" value={cvDetails.header.phone} onChange={(e) => handleChange(e, "phone")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-city"}>City</label>
                    <input type="text" id={sectionTag + "-city"} placeholder="e.g. Lagos" value={cvDetails.header.city} onChange={(e) => handleChange(e, "city")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-country"}>Country</label>
                    {/* <input type="text" id={sectionTag + "-country"} placeholder="e.g. Nigeria"></input> */}
                    <select className="form-select" id={sectionTag + "-country"} aria-label={countryNames[0]} value={country} onChange={(e) => handleCountrySelect(e)}>
                        {
                            countryNames.map((countryName, key) => {
                                return <option key={key} value={countryName}>{countryName}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column mb-2">
                    <label htmlFor={sectionTag + "-nationality"}>Nationality</label>
                    <input type="text" id={sectionTag + "-nationality"} placeholder="e.g. Nigerian" value={cvDetails.header.nationality} onChange={(e) => handleChange(e, "nationality")}></input>
                </div>
                <div className="form-group col-md-6 d-flex flex-column">
                    <label htmlFor={sectionTag + "-linkedin"}>LinkedIn Username</label>
                    <input type="text" id={sectionTag + "-linkedin"} placeholder="e.g. chinwe-ibegbu" value={cvDetails.header.linkedinUsername} onChange={(e) => handleChange(e, "linkedinUsername")}></input>
                </div>
            </form>
        </>
    );
}

export default PersonalDetailsEntry;