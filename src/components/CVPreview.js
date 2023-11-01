import React from "react";
// import JsPDF from 'jspdf';
import generatePDF, { Margin } from 'react-to-pdf';
import '../styles/CVPreview.css';
import CVpdf from "./CVpdf.js";

function CVPreview({ cvDetails }) {
    const downloadName = cvDetails.cvName + ".pdf";
    const targetRef = React.useRef();

    const options = {
        filename: downloadName,
        page: {
            margin: Margin.SMALL
        },
        overrides: {
            // See https://html2canvas.hertzen.com/configuration for more options
            canvas: {
                scale: 5
            }
        },
    };

    return (
        <div className="cv-editor-preview d-flex flex-column align-items-center col-xl-6 bordered">
            <p className="title">CV Preview</p>
            <CVpdf cvPreviewDetails={cvDetails} targetRef={targetRef} />
            <div className="interaction-btns mt-2">
                <button className="button btn mx-1" onClick={() => generatePDF(targetRef, options)}>Download CV</button>
                <button className="button-icon btn mx-1">
                    <i className="bi-share" />
                </button>
            </div>
        </div>
    );
}

export default CVPreview;