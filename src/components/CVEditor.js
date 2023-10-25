import React, { useState, useEffect } from "react";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar';
import CVEditorSection from "./CVEditorSection";
import CVPreview from "./CVPreview";
import { educationEntryTemplate } from "../data/entryTemplates";

function CVEditorTrial({ cvName }) {
    // Handle state + Connect editor and preview
    
    const [cvDetails, setCvDetails] = useState({
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
            {...educationEntryTemplate}
        ],
        achievementsAwards: [],
        workExperience: [],
        skills: {
            hardSkills: [],
            softSkills: []
        }
    })

    // For debugging
    useEffect(() => {
        // console.log(cvDetails.header);
    }, [cvDetails]);

    return (
        <>
            <TitleBar location="main-body" />
            <div className="cv-editor row bordered">
                <div className="cv-editor-details px-5 pb-3 col-xl-6 bordered">
                    <p className="title text-center mt-3">{cvName}</p>
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

export default CVEditorTrial;