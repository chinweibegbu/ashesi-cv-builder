import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar.js';
import CVEditorSection from "./CVEditorSection.js";
import CVPreview from "./CVPreview.js";
import { educationEntryTemplate, achievementAwardEntryTemplate, workExperienceEntryTemplate, skillEntryTemplate } from "../data/entryTemplates.js";

function CVEditorNew() {
    const navigate = useNavigate();

    // Get userId
    const { state } = useLocation();
    const { userId, fullName } = state;

    // Handle state + Connect editor and preview
    const [cvDetails, setCvDetails] = useState({
        cvName: "Untitled",
        header: {
            firstName: "",
            lastName: "",
            city: "",
            country: "",
            phoneNumber: "",
            nationality: "",
            email: "",
            linkedinUsername: ""
        },
        education: [
            { ...educationEntryTemplate }
        ],
        achievementsAwards: [
            { ...achievementAwardEntryTemplate }
        ],
        workExperience: [
            { ...workExperienceEntryTemplate }
        ],
        skills: [
            { ...skillEntryTemplate }
        ]
    })

    const handleSave = async () => {
        await axios.post(`http://localhost:3005/api/${userId}/cv`, {
            name: cvDetails.cvName,
            lastEdited: new Date(),
            linkToCV: "https://www.google.com",
            ...cvDetails.header,
            education: cvDetails.education,
            achievementAwards: cvDetails.achievementsAwards,
            workExperience: cvDetails.workExperience,
            skills: cvDetails.skills,
        }).then((response) => {
            navigate("/dashboard", {
                state: {
                    userId: userId,
                    fullName: fullName
                }
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <TitleBar location="main-body" />
            <div className="cv-editor row bordered">
                <div className="cv-editor-details px-5 pb-3 col-xl-6 bordered">
                    <form className="text-center mt-3 mb-3">
                        <input className="text-center" type="text" id="cv-name" value={cvDetails.cvName} onChange={(e) => setCvDetails({ ...cvDetails, cvName: e.target.value })}></input>
                    </form>
                    <div className="accordion" id="detail-sections">
                        <CVEditorSection sectionName={"Personal Details"} isExpanded={true} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Education"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Achievements & Awards"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Work Experience"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Skills"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="button btn my-2" onClick={handleSave}>Save CV</button>
                    </div>
                </div>
                <CVPreview cvDetails={cvDetails} />
            </div>
        </>
    );
}

export default CVEditorNew;