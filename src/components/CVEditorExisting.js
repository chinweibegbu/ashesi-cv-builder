import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar.js';
import CVEditorSection from "./CVEditorSection.js";
import CVPreview from "./CVPreview.js";
import { achievementAwardEntryTemplate } from "../data/entryTemplates.js";
// import Loader from "./Loader.js";

function CVEditorExisting() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Get user_id
    const { state } = useLocation();
    const { user_id, full_name, cv_id } = state;

    // Handle state + Connect editor and preview
    const [cvDetails, setCvDetails] = useState({
        cvName: "Untitled",
        header: {
            first_name: "",
            last_name: "",
            city: "",
            country: "",
            phone_number: "",
            nationality: "",
            email: "",
            linkedin_username: ""
        },
        education: [],
        achievementsAwards: [],
        workExperience: [],
        skills: []
    })

    const handleUpdate = async () => {
        await axios.patch(`http://localhost:3005/api/${user_id}/cv/${cv_id}`, {
            name: cvDetails.cvName,
            last_edited: new Date(),
            ...cvDetails.header
        }).then((response) => {
            navigate("/dashboard", {
                state: {
                    user_id: user_id,
                    full_name: full_name
                }
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        // Get the data of the existing CV
        const getCVData = async () => {
            await axios.get(`http://localhost:3005/api/${user_id}/cv/${cv_id}`)
                .then((response) => {
                    const educationEntries = response.data.education.map(
                        educationEntry => {
                            return {...educationEntry, active:true}
                        }
                    );
                    const achievementsAwardsEntries = response.data.achievementsAwards.map(
                        achievementAwardEntry => {
                            return {...achievementAwardEntry, active:true}
                        }
                    );
                    const workExperienceEntries = response.data.workExperience.map(
                        workExperienceEntry => {
                            return {...workExperienceEntry, active:true}
                        }
                    );
                    const skillEntries = response.data.skills.map(
                        skillEntry => {
                            return {...skillEntry, active:true}
                        }
                    );
                    setCvDetails({
                        ...cvDetails,
                        cvName: response.data.name,
                        header: {
                            ...cvDetails.header,
                            first_name: response.data.first_name,
                            last_name: response.data.last_name,
                            city: response.data.city,
                            country: response.data.country,
                            phone_number: response.data.phone_number,
                            nationality: response.data.nationality,
                            email: response.data.email,
                            linkedin_username: response.data.linkedin_username
                        },
                        education: educationEntries,
                        achievementsAwards: achievementsAwardsEntries,
                        workExperience: workExperienceEntries,
                        skills: skillEntries
                    });
                    setIsLoading(false);
                }).catch((err) => {
                    console.log(err);
                });
        }

        getCVData();
    }, []);

    return (
        isLoading ?
            "Loading..." :
            <>
                <TitleBar location="main-body" />
                <div className="cv-editor row bordered">
                    <div className="cv-editor-details px-5 pb-3 col-xl-6 bordered">
                        <form className="text-center mt-3 mb-3">
                            <input className="text-center" type="text" id="cv-name" value={cvDetails.cvName} onChange={(e) => setCvDetails({ ...cvDetails, cvName: e.target.value })}></input>
                        </form>
                        <div className="accordion" id="detail-sections">
                            <CVEditorSection sectionName={"Personal Details"} isExpanded={true} cvDetails={cvDetails} setCvDetails={setCvDetails} newCV={false} />
                            <CVEditorSection sectionName={"Education"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} newCV={false} />
                            <CVEditorSection sectionName={"Achievements & Awards"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} newCV={false} />
                            <CVEditorSection sectionName={"Work Experience"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} newCV={false} />
                            <CVEditorSection sectionName={"Skills"} isExpanded={false} cvDetails={cvDetails} setCvDetails={setCvDetails} newCV={false} />
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