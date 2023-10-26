import React, { useState, useEffect } from "react";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar';
import CVEditorSection from "./CVEditorSection";
import CVPreview from "./CVPreview";
import { educationEntryTemplate, achievementAwardEntryTemplate, workExperienceEntryTemplate, skillEntryTemplate } from "../data/entryTemplates";

function CVEditor() {
    // Handle state + Connect editor and preview

    const [cvDetails, setCvDetails] = useState({
        cvName: "Untitled-5",
        header: {
            firstName: "",
            lastName: "",
            city: "",
            country: "",
            phone: "",
            nationality: "",
            email: "",
            linkedinLink: "",
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

    // For debugging
    useEffect(() => {
        // console.log(cvDetails);
    }, [cvDetails]);

    const handleNameChange = (event) => {
        setCvDetails({
            ...cvDetails,
            cvName: event.target.value
        });
    }

    return (
        <>
            <TitleBar location="main-body" />
            <div className="cv-editor row bordered">
                <div className="cv-editor-details px-5 pb-3 col-xl-6 bordered">
                    <form className="text-center mt-3 mb-3">
                        <input className="text-center" type="text" id="cv-name" value={cvDetails.cvName+" "} onChange={(e) => handleNameChange(e)}></input>
                    </form>
                    <div className="accordion" id="detail-sections">
                        <CVEditorSection sectionName={"Personal Details"} isExpanded={true} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Education"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Achievements & Awards"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Work Experience"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                        <CVEditorSection sectionName={"Skills"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} />
                    </div>
                </div>
                <CVPreview cvDetails={cvDetails} />
            </div>
        </>
    );
}

export default CVEditor;