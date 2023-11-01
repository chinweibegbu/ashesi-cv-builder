import React from "react";
import { pdfUtils } from "../utils/pdf-utils.js";

function CVpdf({ cvPreviewDetails, targetRef }) {
    const { header, education, achievementsAwards, workExperience, skills } = cvPreviewDetails;
    const { firstName, lastName, city, country, phoneNumber, nationality, email, linkedinUsername } = header;
    const hardSkills = skills.filter(skill => skill.type === "Hard Skill");
    const softSkills = skills.filter(skill => skill.type === "Soft Skill");

    const { educationEntryDateGenerator,
        achievementsAwardsEntryDateGenerator,
        workExperienceEntryDateGenerator,
        skillLevelDisplayGenerator } = pdfUtils;

    return (
        <div id="cv-pdf-reference" className="cv-pdf container-fluid bordered p-2" ref={targetRef}>
            <div className="row cv-pdf-header entry text-center bordered">
                <p className="cv-name">{firstName ? firstName : "FirstName"} {lastName ? lastName : "LastName"}</p>
                <p>{city ? city : "City"}, {country ? country : "Country"}</p>
                <p>{phoneNumber ? phoneNumber : "000 000 000"} | {nationality ? nationality : "Nationality"}</p>
                <p>{email ? email : "email@address.com"}</p>
                <div>
                    <div className="d-flex justify-content-center">
                        <i className="bi-linkedin me-1" />
                        <a href={"https://www.linkedin.com/in/" + linkedinUsername} target="_blank" rel="noopener noreferrer">{linkedinUsername ? linkedinUsername : "linkedin-username"}</a>
                    </div>
                </div>
            </div>
            <div className="row cv-pdf-education bordered">
                <p className="section-header">Education</p>
                {
                    education.map((entry, key) => {
                        // Only display active entries
                        if (entry.active === true) {
                            return (
                                <div key={key} className=" entry d-flex justify-content-between mb-1">
                                    <div>
                                        <p><b>{entry.name}</b></p>
                                        <p>{entry.degree} {entry.major}</p>
                                        <p>{entry.cgpa ? "Cumulative GPA: " + entry.cgpa + "/4.00" : ""}</p>
                                    </div>
                                    <div className="align-right">
                                        <p><b>{(!(entry.city) || !(entry.country)) ? "" : entry.city + "," + entry.country}</b></p>
                                        <p>{educationEntryDateGenerator(entry)}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div key={key}></div>)
                        }
                    })
                }
            </div>
            <div className="row cv-pdf-achievementsawards pb-1 bordered">
                <p className="section-header">Achievements/Awards</p>
                {
                    achievementsAwards.map((entry, key) => {
                        // Only display active entries
                        if (entry.active === true) {
                            return (
                                <div key={key} className="entry d-flex justify-content-between">
                                    <div>
                                        <p><b>{entry.name ? entry.name + "," : ""}</b> <i>{entry.awarder ? entry.awarder : ""}</i></p>
                                    </div>
                                    <div className="align-right">
                                        <p>{achievementsAwardsEntryDateGenerator(entry)}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (<div key={key}></div>)
                        }
                    })
                }
            </div>
            <div className="row cv-pdf-workexpreience bordered">
                <p className="section-header">Work Experience</p>
                {
                    workExperience.map((entry, key) => {
                        if (entry.active === true) {
                            return (
                                <div key={key} className=" entry mb-1">
                                    <div className="d-flex justify-content-between">
                                        <p><b>{entry.companyName}</b> {(!(entry.companyCity) || !(entry.companyCountry)) ? "" : " - " + entry.companyCity + ", " + entry.companyCountry}</p>
                                        <div className="align-right">
                                            <p><b>{workExperienceEntryDateGenerator(entry)}</b></p>
                                        </div>
                                    </div>
                                    <p>{entry.title}</p>
                                    <ul>
                                        {
                                            entry.descriptions.map((description, key) => {
                                                return <li key={key}>{description}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        } else {
                            return (<div key={key}></div>)
                        }
                    })
                }
                {workExperience.length === 0 ? <div className="pb-1"></div> : <></>}
            </div>
            <div className="row cv-pdf-skills pb-1 bordered">
                <p className="section-header">Skills</p>
                <div className="d-flex justify-content-between">
                    <div className="col-6 bordered">
                        <p>Hard Skills</p>
                        <ul>
                            {
                                hardSkills.map((skill, key) => {
                                    if (skill.active && skill.name) {
                                        return <li key={key}>
                                            <div className="d-flex">
                                                <p className="col-5">{skill.name}</p>
                                                <div className="col-7 d-flex">
                                                    {skillLevelDisplayGenerator(skill.level)} <p className="ms-1">({skill.level})</p>
                                                </div>
                                            </div>
                                        </li>
                                    } else {
                                        return (<div key={key}></div>)
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-6 bordered">
                        <p>Soft Skills</p>
                        <ul>
                            {
                                softSkills.map((skill, key) => {
                                    if (skill.active && skill.name) {
                                        return <li key={key}>
                                            <div className="d-flex">
                                                <p className="col-5">{skill.name}</p>
                                                <div className="col-7 d-flex">
                                                    {skillLevelDisplayGenerator(skill.level)} <p className="ms-1">({skill.level})</p>
                                                </div>
                                            </div>
                                        </li>
                                    } else {
                                        return (<div key={key}></div>)
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row cv-pdf-references bordered">
                <p className="section-header">References</p>
                <p>Available upon request</p>
            </div>
        </div >
    );
}

export default CVpdf;