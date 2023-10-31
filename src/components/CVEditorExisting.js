import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar.js';
import CVEditorSection from "./CVEditorSection.js";
import CVPreview from "./CVPreview.js";
import { educationEntryTemplate, achievementAwardEntryTemplate, workExperienceEntryTemplate, skillEntryTemplate } from "../data/entryTemplates.js";

function CVEditorExisting() {
    const navigate = useNavigate();

    // Get userId
    const { state } = useLocation();
    const { userId, fullName, cvId } = state;

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

    const handleUpdate = async () => {
        await axios.patch(`http://localhost:3005/api/${userId}/cv/${cvId}`, {
            name: cvDetails.cvName,
            lastEdited: new Date(),
            ...cvDetails.header
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

    useEffect(() => {
        const getCVData = async () => {
            await axios.get(`http://localhost:3005/api/${userId}/cv/${cvId}`)
                .then((response) => {
                    console.log(response);
                    setCvDetails({
                        ...cvDetails,
                        cvName: response.data.name,
                        header: {
                            ...cvDetails.header,
                            firstName: response.data.firstname,
                            lastName: response.data.lastname,
                            city: response.data.city,
                            country: response.data.country,
                            phoneNumber: response.data.phonenumber,
                            nationality: response.data.nationality,
                            email: response.data.email,
                            linkedinUsername: response.data.linkedinusername
                        }
                    });
                }).catch((err) => {
                    console.log(err);
                });
        }

        getCVData();
    }, []);

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
                        <button className="button btn my-2" onClick={handleUpdate}>Update CV</button>
                    </div>
                </div>
                <CVPreview cvDetails={cvDetails} />
            </div>
        </>
    );
}

export default CVEditorExisting;