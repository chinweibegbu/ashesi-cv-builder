import React from "react";

function CVpdf({ cvPreviewDetails }) {
    const { header, education, achievementsAwards, workExperience, skills } = cvPreviewDetails;

    // Handle the different sections' data
    const { fullName, address, phone, nationality, email, linkedinLink, linkedinUsername } = header;
    const achievementsAwardsEntryDateGenerator = (entry) => {
        if (entry.durationType === "One-time") {
            return entry.dateAwarded;
        } else if ((entry.durationType === "Continuous") && (entry.ongoing === true)) {
            return entry.dateAwarded + " - Present";
        } else if ((entry.durationType === "Continuous") && (entry.ongoing === false)) {
            return entry.dateAwarded + " - " + entry.dateExpired;
        }
    }
    const workExperienceEntryDateGenerator = (entry) => {
        if (entry.ongoing === true) {
            return entry.startDate + " - Present";
        } else {
            return entry.startDate + " - " + entry.endDate;
        }
    }
    const { hardSkills, softSkills } = skills;
    const skillLevelDisplayGenerator = (level) => {
        let display = [];
        let numFilled = {
            'Novice': 1,
            'Intermediate': 2,
            'Advanced': 3,
            'Proficient': 4,
            'Expert': 5
        };

        const circleFilled = <i className="bi-circle-fill" />,
            circleEmpty = <i className="bi-circle" />;

        for (let i = 0; i < numFilled[level]; i++) {
            display.push(circleFilled);
        }
        for (let i = 0; i < (5-numFilled[level]); i++) {
            display.push(circleEmpty);
        }
        
        const compositeDisplay = <div className="d-flex">
            {
                display.map(circle => {
                    return circle;
                })
            }
        </div>;

        return compositeDisplay;
    }

    return (
        <div className="cv-pdf container-fluid bordered p-2">
            <div className="row cv-pdf-header entry text-center bordered">
                <p className="cv-name">{fullName}</p>
                <p>{address}</p>
                <p>{phone} | {nationality}</p>
                <p>{email}</p>
                <div>
                    <div className="d-flex justify-content-center">
                        <i className="bi-linkedin me-1" />
                        <a href={linkedinLink}>{linkedinUsername}</a>
                    </div>
                </div>
            </div>
            <div className="row cv-pdf-education bordered">
                <p className="section-header">Education</p>
                {
                    education.map(entry => {
                        return (
                            <div className=" entry d-flex justify-content-between mb-1">
                                <div>
                                    <p><b>{entry.name}</b></p>
                                    <p>{entry.degree} {entry.major}</p>
                                    <p>Cumulative GPA: {entry.cgpa}/4.00</p>
                                </div>
                                <div className="align-right">
                                    <p><b>{entry.location}</b></p>
                                    <p>{entry.startDate} - {entry.endDate}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row cv-pdf-achievementsawards pb-1 bordered">
                <p className="section-header">Achievements/Awards</p>
                {
                    achievementsAwards.map(entry => {
                        return (
                            <div className="entry d-flex justify-content-between">
                                <div>
                                    <p><b>{entry.name}</b>, <i>{entry.awarder}</i></p>
                                </div>
                                <div className="align-right">
                                    <p>{achievementsAwardsEntryDateGenerator(entry)}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row cv-pdf-workexpreience bordered">
                <p className="section-header">Work Experience</p>
                {
                    workExperience.map(entry => {
                        return (
                            <div className=" entry mb-1">
                                <div className="d-flex justify-content-between">
                                    <p><b>{entry.companyName}</b> - {entry.companyLocation}</p>
                                    <div className="align-right">
                                        <p><b>{workExperienceEntryDateGenerator(entry)}</b></p>
                                    </div>
                                </div>
                                <p>{entry.title}</p>
                                <ul>
                                    {
                                        entry.descriptors.map((descriptor) => {
                                            return <li>{descriptor}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row cv-pdf-skills pb-1 bordered">
                <p className="section-header">Skills</p>
                <div className="d-flex justify-content-between">
                    <div className="col-6 bordered">
                        <p>Hard Skills</p>
                        <ul>
                            {
                                hardSkills.map(skill => {
                                    return <li>
                                        <div className="d-flex">
                                            <p className="col-5">{skill.name}</p>
                                            <div className="col-7 d-flex">
                                                {skillLevelDisplayGenerator(skill.level)} <p className="ms-1">({skill.level})</p>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-6 bordered">
                        <p>Soft Skills</p>
                        <ul>
                            {
                                softSkills.map(skill => {
                                    return <li>
                                        <div className="d-flex">
                                            <p className="col-5">{skill.name}</p>
                                            <div className="col-7 d-flex">
                                                {skillLevelDisplayGenerator(skill.level)} <p className="ms-1">({skill.level})</p>
                                            </div>
                                        </div>
                                    </li>
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