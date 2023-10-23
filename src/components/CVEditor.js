import React from "react";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar';
import CVEditorSection from "./CVEditorSection";

function CVEditorTrial({ cvName }) {
    return (
        <>
            <TitleBar location="main-body" />
            <div className="cv-editor row bordered">
                <div className="cv-editor-details px-5 pb-2 col-xl-6 bordered">
                    <p className="title text-center mt-3">{cvName}</p>
                    <div className="accordion" id="detail-sections">
                        <CVEditorSection sectionName={"Personal Details"} isExpanded={true} />
                        <CVEditorSection sectionName={"Education"} isExpanded={false} />
                        <CVEditorSection sectionName={"Achievements & Awards"} isExpanded={false} />
                        <CVEditorSection sectionName={"Work Experience"} isExpanded={false} />
                        <CVEditorSection sectionName={"Skills"} isExpanded={false} />
                    </div>
                </div>
                <div className="cv-editor-preview d-flex flex-column align-items-center col-xl-6 bordered">
                    <p className="title">CV Preview</p>
                    <div className="pdf">
                    </div>
                    <div className="interaction-btns mt-2">
                        <button className="button btn mx-1">Download CV</button>
                        <button className="button-icon btn mx-1">
                            <i className="bi-share" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CVEditorTrial;