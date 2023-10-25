import React from "react";
import '../styles/CVPreview.css';
import CVpdf from "./CVpdf";
import { cvStubData } from '../data/cvStubData';

function CVPreview({ cvDetails }) {
    return (
        <div className="cv-editor-preview d-flex flex-column align-items-center col-xl-6 bordered">
            <p className="title">CV Preview</p>
            <CVpdf cvPreviewDetails={cvDetails}/>
            <div className="interaction-btns mt-2">
                <button className="button btn mx-1">Download CV</button>
                <button className="button-icon btn mx-1">
                    <i className="bi-share" />
                </button>
            </div>
        </div>
    );
}

export default CVPreview;