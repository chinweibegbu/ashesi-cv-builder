import React from "react";
// import JsPDF from 'jspdf';
import { ReactToPdf, usePDF } from 'react-to-pdf';
import '../styles/CVPreview.css';
import CVpdf from "./CVpdf.js";

function CVPreview({ cvDetails }) {
    const downloadName = cvDetails.cvName + ".pdf";
    // const generatePDFWithJsPDF = () => {
    //     const report = new JsPDF('portrait', 'pt', 'a4');
    //     report.html(document.querySelector('#cv-pdf-reference')).then(() => {
    //         report.save(downloadName);
    //     });
    // }

    // Used react-to-pdf >> ISSUE: Size/scale
    const { toPDF, targetRef } = usePDF({ filename: downloadName });

    return (
        <div className="cv-editor-preview d-flex flex-column align-items-center col-xl-6 bordered">
            <p className="title">CV Preview</p>
            <CVpdf cvPreviewDetails={cvDetails} targetRef={targetRef} />
            <div className="interaction-btns mt-2">
                <button className="button btn mx-1" onClick={() => toPDF()}>Download CV</button>
                <button className="button-icon btn mx-1">
                    <i className="bi-share" />
                </button>
            </div>
        </div>
    );
}

export default CVPreview;