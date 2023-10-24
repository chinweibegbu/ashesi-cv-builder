import React from "react";
import '../styles/CVEditor.css';
import TitleBar from './TitleBar';
import CVEditorSection from "./CVEditorSection";
import CVPreview from "./CVPreview";

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
                <CVPreview />
            </div>
        </>
    );
}

export default CVEditorTrial;